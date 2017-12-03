import React from "react";
import moment from 'moment';
import Info from './Info';
import RuleText from './RuleText';

const Rules = (props) => {

    const inputs = props.data.initial;
    const members = props.data.members;

    const startA = new Date(inputs.vacations.start);
    const endA = new Date(inputs.vacations.end);
    const totalA = totalWorkingDays(startA, endA);

    //European to International
    function formater(day) {
        return moment(day).format('DD/MM/YYYY')
    }

    /*http://snipplr.com/view/4086/calculate-business-days-between-two-dates/ */
    function totalWorkingDays(start, end) {
        var iWeeks, iDateDiff, iAdjust = 0;
        if (end < start) return -1;  // error code if dates transposed
        var iWeekday1 = start.getDay();     // day of week          
        var iWeekday2 = end.getDay();

        iWeekday1 = (iWeekday1 == 0) ? 7 : iWeekday1;   // change Sunday from 0 to 7
        iWeekday2 = (iWeekday2 == 0) ? 7 : iWeekday2;

        if ((iWeekday1 > 5) && (iWeekday2 > 5)) iAdjust = 1;  // adjustment if both days on weekend
        iWeekday1 = (iWeekday1 > 5) ? 5 : iWeekday1;    // only count weekdays
        iWeekday2 = (iWeekday2 > 5) ? 5 : iWeekday2; // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
        iWeeks = Math.floor((end.getTime() - start.getTime()) / 604800000)
        if (iWeekday1 <= iWeekday2) {
            iDateDiff = (iWeeks * 5) + (iWeekday2 - iWeekday1)
        } else {
            iDateDiff = ((iWeeks + 1) * 5) - (iWeekday1 - iWeekday2)
        }

        iDateDiff -= iAdjust  // take into account both days on weekend

        return (iDateDiff + 1);   // add 1 because dates are inclusive
    }
    /**
     * Overlaping 
     * The system checks if the periods overlaping and how many days
     */
    function dateRangeOverlaps(a_start, a_end, b_start, b_end) {
        if (a_start <= b_start && b_start <= a_end) return true; // b starts in a
        if (a_start <= b_end && b_end <= a_end) return true; // b ends in a
        if (b_start < a_start && a_end < b_end) return true; // a in b
        return false;
    }

    function inclusiveDays(a_start, a_end, b_start, b_end) {
        // If they don't intersect return 0.
        if (!dateRangeOverlaps(a_start, a_end, b_start, b_end)) {
            return 0;
        }
        const maxStartDate = maxDate(a_start, b_start);
        const minEndDate = minDate(a_end, b_end);
        return daydiff(maxStartDate, minEndDate);
    }

    function daydiff(first, second) {
        const one_day = 1000 * 60 * 60 * 24; // hours*minutes*seconds*milliseconds
        return totalWorkingDays(first, second)
    }

    function maxDate(a_date, b_date) {
        if (a_date > b_date)
            return a_date;
        else
            return b_date;
    }

    function minDate(a_date, b_date) {
        if (a_date < b_date)
            return a_date;
        else
            return b_date;
    }
    /*==========================================*/
    function overlapConstructor(overlap, member, start, end) {
        if (overlap != 0) {
            if (overlap >= 4) {
                return <RuleText
                    case={1}
                    name={member.name}
                    start={formater(start)}
                    end={formater(end)}
                />
            }
            return <RuleText
                case={2}
                name={member.name}
                start={formater(start)}
                end={formater(end)}
            />
        } else {
            const nextEnd = moment(endA).add(1, 'days').unix();
            const previousStart = moment(startA).add(-1, 'days').unix();
            if (nextEnd == moment(start).unix()) {
                return <RuleText
                    case={3}
                    name={member.name}
                />
            }
            if(previousStart==moment(end).unix()){
                return <RuleText
                case={4}
                name={member.name}
            />
            }
        }
    }
    
    /*https://chandoo.org/wp/2010/06/01/date-overlap-formulas/ */
    const rules = members.map(function (element, index) {
        const startB = new Date(element.start);
        const endB = new Date(element.end);
        const totalB = totalWorkingDays(startB, endB);
        const overlaping = inclusiveDays(startA, endA, startB, endB);
        return overlapConstructor(overlaping, element, startB, endB);
    });
    const totalLeft=inputs.leftDays - totalA
    return (
        <div >
            <div className="form-section">{rules}</div>
            <Info
                current={totalA}
                leftDays={totalLeft}
            />
        </div>
    );
}

export default Rules;