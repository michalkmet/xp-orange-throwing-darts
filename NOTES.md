# Notes

## Legend

- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1:

- ✅ DONE Initial refactor
- ✅ DONE Examples
- ✅ DONE User Stories and UATs

- ⚠ TODO User Story 1: 1 digit numbers
  As a user, I want to see correct results for 1 digit numbers

- ✅ DONE UAT1.1 When I pass [1] then I should see 110

Pomodoro 2:

- ✅ DONE UAT1.2 When I pass [4] then I should see 110
- ✅ DONE UAT1.3 When I pass [5] then I should see 5
- ✅ DONE UAT1.4 When I pass [9] then I should see 5
- ✅ DONE UAT1.5 When I pass [10] then I should see 5
- ✅ DONE UAT1.6 When I pass [11] then I should see 0
- ✅ DONE UAT1.7 When I pass [33] then I should see 0

- 🚧 IN PROGRESS User Story 2: 2 digits numbers
  As a user, I want to see correct results for 2 digits numbers

- ✅ DONE UAT2.1 When I pass [33, 10] then I should see 5
- ✅ DONE UAT2.2 When I pass [28, 4] then I should see 10
- ✅ DONE UAT2.3 When I pass [9, 4] then I should see 15
- ✅ DONE UAT2.4 When I pass [2, 4] then I should see 120
- ✅ DONE UAT2.5 When I pass [12, 44] then I should see 0

Pomodoro 3

User Story 3: 3+ digits numbers
As a user, I want to see correct results for 3+ digits numbers

- ✅ DONE UAT3.1 When I pass [1, 5, 11] then I should see 15
- ✅ DONE UAT3.2 When I pass [15, 20, 30] then I should see 0
- ✅ DONE UAT3.3 When I pass [1, 2, 3, 4] then I should see 140
- ✅ DONE UAT3.4 When I pass [] then I should see 0
- ✅ DONE UAT3.5 When I pass [0, 5, 10, 10.5, 4.5] then I should see 30
- ✅ DONE Refactor complexity
