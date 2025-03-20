/*

--------------------------------
| Column Name | Data Type      |
--------------------------------
| id          | Integer        |
| recordDate  | date           | 
| temperature | Integer        |
--------------------------------
id is the column with unique values for this table.
There are no different rows with the same recordDate.
This table contains information about the temperature on a certain day.
Write a solution to find all dates' id with higher temperatures compared to its previous dates (yesterday).
Return the result table in any order.
The result format is in the following example.


Example 1:
Input:
Weather history table:
+---------+----------------+---------------------+
|  id         recordDate           Temperature   |
+---------+----------------+---------------------+
| 1       |  2015-12-01    |      10             |
| 2       |  2015-12-02    |      25             |
| 3       |  2015-12-03    |      20             |
| 4       |  2015-12-04    |      30             |
+---------+----------------+---------------------+

Output:
+---------+
|  id     |
+---------+
| 2       |
| 4       |
+---------+

Explanation:

For 2015-12-02, 25 is higher than 10.
For 2015-12-04, 30 is higher than 20.

*/

interface TemperatureInfo {
    id: number; 
    recordDate: string;
    temperature: number;
}

class TemperatureRecord {
  private id: number; 
  private recordDate: string;
  private temperature: number;

    constructor (id: number = 0, recordDate: string ='', temperature:number = 0) {
        this.id = id;
        this.recordDate = recordDate;
        this.temperature = temperature;
    }

public getHigherTemperatureId = (data: TemperatureInfo[]) => {
    const temperatureHistory: number [] = [];

    for (let i = 1; i < data.length; i++) {
        if (data[i].temperature > data[i-1].temperature) {
            temperatureHistory.push(data[i].id)
        } 
  
}   
return temperatureHistory
}
}

const temperatureData: TemperatureInfo[] = [
    { id: 1, recordDate: "2015-12-01", temperature: 10 },
    { id: 2, recordDate: "2015-12-02", temperature: 25 },
    { id: 3, recordDate: "2015-12-03", temperature: 20 },
    { id: 4, recordDate: "2015-12-04", temperature: 30 },
    { id: 5, recordDate: "2015-12-05", temperature: 23 },
    { id: 6, recordDate: "2015-12-06", temperature: 40 },
]

const temperatureRecord = new TemperatureRecord()
console.log (temperatureRecord.getHigherTemperatureId(temperatureData))