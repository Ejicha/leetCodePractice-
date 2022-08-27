var merge = function(intervals) {
    intervals.sort((a, b)=>a[0]-b[0]);
    for(let i = 0;i<intervals.length-1; i++){
           if(intervals[i+1][0]>=intervals[i][0] && intervals[i+1][0]<=intervals[i][1]){
           let x = intervals[i][0];
           let y = intervals[i][1];
           if(intervals[i+1][0]<x){
                 x = intervals[i+1][0];
            }
           if(intervals[i+1][1]>y){
                 y = intervals[i+1][1];
            }
            intervals[i][0] = x;
          	intervals[i][1] = y;
          	intervals.splice(i+1,1);  
            i--;
       }
    }
    return intervals;
};
