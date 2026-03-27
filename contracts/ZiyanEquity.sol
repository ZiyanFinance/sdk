// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ZiyanEquity is ERC20, Ownable {

    uint256 public pricePerShare;

    constructor(
        string memory name,
        string memory symbol,
        uint256 _pricePerShare
    ) ERC20(name, symbol) {
        pricePerShare = _pricePerShare;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function buyShares() public payable {
        require(msg.value > 0, "Send ETH to buy shares");

        uint256 amount = msg.value / pricePerShare;
        _mint(msg.sender, amount);
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
