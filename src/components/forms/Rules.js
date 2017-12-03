import React from "react";
import moment from 'moment';

const Rules = (props) => {

    const inputs = props.data.initial.vacations;
    const members = props.data.members;

    const startA = new Date(converter(inputs.start));
    const endA = new Date(converter(inputs.end));
    const totalA = totalWorkingDays(startA, endA);

    //European to International
    function converter(day) {
        return moment(day, 'DD/MM/YYYY').format('YYYY,  MM,DD')
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
        iWeekday2 = (iWeekday2 > 5) ? 5 : iWeekday2;

        // calculate differnece in weeks (1000mS * 60sec * 60min * 24hrs * 7 days = 604800000)
        iWeeks = Math.floor((end.getTime() - start.getTime()) / 604800000)

        if (iWeekday1 <= iWeekday2) {
            iDateDiff = (iWeeks * 5) + (iWeekday2 - iWeekday1)
        } else {
            iDateDiff = ((iWeeks + 1) * 5) - (iWeekday1 - iWeekday2)
        }

        iDateDiff -= iAdjust                            // take into account both days on weekend

        return (iDateDiff + 1);                         // add 1 because dates are inclusive
    }




    /*https://chandoo.org/wp/2010/06/01/date-overlap-formulas/ */
    /*https://derickbailey.com/2015/09/07/check-for-date-range-overlap-with-javascript-arrays-sorting-and-reducing/*/
  
    const rules = members.map(function (element, index) {
        const startB = new Date(element.start);
        const endB = new Date(element.end);
        const totalB = totalWorkingDays(startB, endB);
        /*https://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap*/
        if (startA <= endB && endA >= startB) {
            if (startB <= startA && endB >= endA && totalA >= 4) { //only when vacations is in the vactions of another user
                //console.log("Your absense is within 4 days of " + element.name);
                return <p><i className='fa fa-user'> </i>Your absense is within 4 days of <i className="purple" > {element.name} </i></p>
            } else {
                return <p><i className='fa fa-user'></i><i className="purple">{element.name}</i> will be absent from <i className="purple">{moment(startB).format('DD/MM/YYYY')}</i> to <i className="purple">{moment(endB).format('DD/MM/YYYY')}</i> </p>
                // console.log(element.name + " will be absent from " + startB + " to" + endB);
            }
        }
        const ajustRule1= endA.setDate(endA.getDate()+1) == startB.setDate(startB.getDate());
        const ajustRule2= startA.setDate(startA.getDate()) == endB.setDate(endB.getDate()+1);
   
        if(ajustRule1 ){
           console.log('adjust');
           return <p><i className='fa fa-user'></i><i className="purple">{element.name}</i> will be absent next day</p>
        }else if(ajustRule2){
            return <p><i className='fa fa-user'></i><i className="purple">{element.name}</i> will be absent until the previous day</p>
        }
    });

    return (
        <div>
            
        {rules}
        </div>
        
        
    );


}

export default Rules;