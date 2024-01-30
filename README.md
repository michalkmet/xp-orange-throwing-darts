# Throwing darts

You've just recently been hired to calculate scores for a Dart Board game!

Scoring specifications:

0 points - radius above 10
5 points - radius between 5 and 10 inclusive
10 points - radius less than 5
If all radii are less than 5, award 100 BONUS POINTS!

Write a function that accepts an array of radii (can be integers and/or floats), and returns a total score using the above specification.

An empty array should return 0.

# Examples

Example 1:

throwingDarts([1]) => 110

Example 2:
throwingDarts([4]) => 110

Example 3:
throwingDarts([5]) => 5

Example 4:
throwingDarts([9]) => 5

Example 5:
throwingDarts([10]) => 5

Example 6:
throwingDarts([11]) => 0

Example 7:
throwingDarts([33]) => 0

Example 8:
throwingDarts([33, 10]) => 5

Example 9:
throwingDarts([28, 4]) => 10

Example 10:
throwingDarts([9, 4]) => 15

Example 11:
throwingDarts([2, 4]) => 120

Example 12:
throwingDarts([12, 44]) => 0

Example 13:
throwingDarts( [1, 5, 11] ) => 15

Example 14:
throwingDarts( [15, 20, 30] ) => 0

Example 15:
throwingDarts( [1, 2, 3, 4] ) => 140

Example 16:
throwingDarts( [] ) => 0

Example 17:
throwingDarts( [0, 5, 10, 10.5, 4.5] ) => 30
