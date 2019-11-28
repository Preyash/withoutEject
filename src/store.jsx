import React from 'react'
class Store {
    reviewList = [
      {id: 1, firstname: "Preyash", lastname: "Hojiwala"},
      {id: 2, firstname: "Prashant", lastname: "Choudhary"},
    ];
  
    addReview(e) {
      this.reviewList.push(e);
    }
  
    get reviewCount() {
      return this.reviewList.length;
    }
}
const DataContext = window.DataContext = React.createContext(new Store());
export default DataContext
