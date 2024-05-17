import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @description Merges the inputs provided and returns the result of the `twMerge()`
 * function.
 * 
 * @param { array } inputs - 0 or more arguments to be passed through to the `twMerge()`
 * function.
 * 
 * @returns { instance of `Class } a twitchx object.
 * 
 * 	The `return` statement in the function body produces an object with the name
 * `twMerge`. This indicates that the `cn` function merges its inputs using Twitter's
 * Clone-and-Merge algorithm.
 * 
 * 	Twitter's Clone-and-Merge (TwMerge) is a widely adopted method for efficient
 * document clustering. By cloning input documents multiple times and merging them,
 * TwMerge identifies dense subspaces of similar items without producing redundant
 * copies. This approach ensures scalability while minimizing computational complexity.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
