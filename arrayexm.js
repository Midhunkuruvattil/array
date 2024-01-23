/* [ id, brand , model , type , pricePerDay, available] */
 carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda',' Civic' , 'Sedan ',55 ,8],
        [3,'Ford',' Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV',70 ,7],
        [5,'Nissan', 'Altima ', 'Sedan ',45 ,12]
];
carBooking.flat()
console.log(carBooking);

// print all car brands
carBooking.forEach(item => {
        console.log(item[1]);
});

//total number of cars avialable
console.log('total  number of cars avialable');


//print sedan car details
console.log('sedan car details');
sedan=carBooking.find(sedan=>sedan[3]=='sedan')
console.log(sedan);

//car with price per day greater than 60
console.log('car with price per day greater than 60');
y=carBooking.filter(car=>car[4]>60)
console.log(y);

//print deatils of 'jeep wrangler'
console.log('deatils of jeepwrangler');
jeep=carBooking.find(jeep=>jeep[2]=='Wrangler')
console.log(jeep);
// sort car based on descending order of price per day
console.log('car based on descending order of price per day');
dsort=carBooking.sort((ppday1,ppday2)=>ppday2[4]-ppday1[4])
console.log(dsort);
// sort car based on ascending order of available cars
console.log('car based on ascending order of available cars');
asort=carBooking.sort((acars1,acars2)=>acars1[5]-acars2[5])
console.log(asort);

//car with most avilable
console.log('car with most avilable');
most=carBooking.reduce((car1,car2)=>car1[5]>car2[5]?car1:car2)
console.log(most);
//calculater the revenue if all cars are rented for a day
console.log(' revenue if all cars are rented for a day');
revenue=carBooking.map(price=>price[4]).reduce((price1,price2)=>price1+price2)
console.log(revenue);
//count number of sedan cars
console.log('number of sedan cars');

//car with fewest available
console.log('car with fewest available');
few=carBooking.reduce((car1,car2)=>car1[5]<car2[5]?car1:car2)
console.log(few);
