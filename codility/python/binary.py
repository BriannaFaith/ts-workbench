# Write a function: def solution(N)
# that, given a positive integer N, returns the length of its longest binary gap.
# The function should return 0 if N doesn't contain a binary gap.

# For example, given N = 1041 the function should return 5,
# because N has binary representation 10000010001 and so its longest binary gap is of length 5.
# Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

def solution(N):
    # Implement your solution here
    # convert integer to binary,find the binary gaps,
    # loop through each binary gap length and return the length of its longest binary gap
    # return zero if no binary gaps
    binary_rep = bin(N)[2:]
    binary_gaps = binary_rep.strip('0').split('1')

    if not binary_gaps:
        return 0

    longest_gap = max(len(gap) for gap in binary_gaps)
    return longest_gap
