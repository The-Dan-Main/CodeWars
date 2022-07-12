

// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page

/**
 * 
 * @param {Array} collection 
 * @param {number} itemsPerPage 
 */
function PaginationHelper(collection, itemsPerPage) {
    let pages = []
    for (let i = 0; i < collection.length; i += itemsPerPage) {
        const page = collection.slice(i, i + itemsPerPage)
        pages.push(page)
    }
    this.countItems = collection.length
    this.countPages = pages.length
    this.pages = pages
    this.itemsPerPage = itemsPerPage
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function (collection) {
    return this.countItems
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function () {
    return this.countPages
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function (pageIndex) {
    if (this.pages[pageIndex] !== undefined) {
        return this.pages[pageIndex].length
    } else {
        return -1
    }

    
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function (itemIndex) {
    let onPage = Math.floor(itemIndex / this.itemsPerPage)
    console.log("Index",itemIndex," is on Page: ",onPage)
    if (itemIndex<0 || itemIndex>this.countItems || this.countPages === 0) {
        return -1
    } 
    else {
        return onPage
    } 
}










var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f','e','f'], 4);
console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid
console.log("--------------------")

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(-1)); //should == 1 (zero based index)
console.log(helper.pageIndex(0)); //should == 0
console.log(helper.pageIndex(1))
console.log(helper.pageIndex(2))
console.log(helper.pageIndex(3))
console.log(helper.pageIndex(4))
console.log(helper.pageIndex(5))
console.log(helper.pageIndex(6))
console.log(helper.pageIndex(7))
console.log(helper.pageIndex(8)); //should == -1
console.log(helper.pageIndex(9)); //should == -1
console.log(helper.pageIndex(10))
console.log(helper.pageIndex(11))
console.log(helper.pageIndex(12))
console.log(helper.pageIndex(13))
console.log(helper.pageIndex(14))
console.log(helper.pageIndex(15))
console.log(helper.pageIndex(16))
console.log(helper.pageIndex(17))
console.log(helper.pageIndex(18))
console.log(helper.pageIndex(19))
