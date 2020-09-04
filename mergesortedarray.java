//Javascript solution written in Java

class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int p1 = m - 1;
        int p2 = n - 1;
        int p3 = m + n - 1;
        
        while ((p2 >= 0) && (p1 >= 0)) {
            nums1[p3--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
        }
        
        //Add missing elements from nums2
        System.arraycopy(nums2, 0, nums1, 0, p2 + 1);
    }
}