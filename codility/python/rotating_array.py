#Rotate an array to the right by a given number of steps.
def solution(A, K):
    # Implement your solution here
    #check if array A  is empty, K too
    # normalize the number of rotations
    # split into two parts and
    if len(A) == 0:
        return A
    if K == 0:
        return A
    K = K % len(A)
    part_one = A[-K:]
    part_two = A[:-K]

    rotated_array = part_one + part_two
    return rotated_array
