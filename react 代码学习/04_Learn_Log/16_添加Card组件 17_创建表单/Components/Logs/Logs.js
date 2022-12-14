import React from 'react';
import './Logs.css'
import Logitem from "./Logitem/Logitem";
import Card from "../UI/Card/Card";

const Logs = () => {

    const logsData = [
       {
           id:"001",
           date:new Date(2021,1,20,18,30),
           desc:'学习九阳神功',
           time:30
       },
        {
            id:"002",
            date:new Date(2022,2,10,12,30),
            desc:'学习降龙十八掌',
            time:20
        },
        {
            id:"003",
            date:new Date(2022,2,20,11,30),
            desc:'学习JavaScript',
            time:40
        },
        {
            id:"004",
            date:new Date(2022,2,15,10,30),
            desc:'学习React',
            time:80
        }
    ];

   const logItemData = logsData.map(item => <Logitem key={item.id} date={item.date} desc={item.desc} time={item.time}/>)
   // const logItemData = logsData.map(item => <Logitem key={item.id} {...item}/>)

    return (
        <Card className="logs">
            {/*<Logitem data={new Date(2021,10,20,19,0)} desc={"学习前端"} time={"50"}/>*/}
            {logItemData}
        </Card>
    );
};

export default Logs;