# Save this as fibonacci.py
import time

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

# start = time.time()
result = fibonacci(35)
# end = time.time()

print(f"Result: {result}")
# print(f"Execution time: {(end - start) * 1000} ms")
