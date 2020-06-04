//Objective is to merge two presorted arrays
//You want 'm' elements from the first array and 'n' elements from the second array

let nums1 = [1,5,6,0,0,0]
let nums2 = [2,3,4]
n = 3
m = 3


//O(n + m)log(n + m) solution
//We splice both arrays together then sort the big array as a whole
nums1.splice(m, n, ...nums2)
nums1.sort((a,b) => {
    return a - b
})


//O(n + m) solution (PREFERRED)
//We use a 2 pointer solution with both pointers (p1 and p2) starting
//from the back of the arrays

//p3 is to represent the back of the final array (the finished nums1 array)
let p1 = n - 1
let p2 = m - 1
let p3 = m + n - 1

//Here we want to exhaust all of the elements from nums2 and place them all into nums1
//Then, we set a query where we find the greater element of the two arrays 
//and place it in the back of the final nums1 array
while (p2 >= 0) {
    nums1[p3--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--]
}
