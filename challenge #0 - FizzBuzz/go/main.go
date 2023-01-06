package main

func main() {
	for index := 1; index < 101; index++ {
		message := ""

		if index%3 == 0 {
			message += "Fizz"
		}

		if index%5 == 0 {
			message += "Buzz"
		}

		if len(message) == 0 {
			println(index)
			continue
		}

		println(message)
	}
}
