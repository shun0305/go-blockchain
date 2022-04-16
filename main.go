package main

import (
	"fmt"
	"log"

	"github.com/shun0305/go-blockchain/blockchain"
)

func init() {
	log.SetPrefix("Blockchain: ")
}

func main() {
	g := blockchain.MINING_SENDER
	fmt.Println(g)
}
