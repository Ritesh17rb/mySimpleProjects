string winnerOfGame(vector < string > labels) {
    // Write Your Code Here

    int count1=0,count2=0;
    
    for(int i=1;<labels.size()-1;i++){
        if((labels[i-1]=="White"&& labels[i]=="White")&&(labels[i]=="White"&& labels[i+1]=="White")){
        count1++;
        }
        else if((labels[i-1]=="Dark"&& labels[i]=="Dark")&&(labels[i]=="Dark"&& labels[i+1]=="Dark")){
        count2++;
        }
    }
if(count1>count2)return"Tushar";
return "Shubh";
}