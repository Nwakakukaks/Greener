import { expect } from "chai";
import { ethers } from "hardhat";

describe("Greener Factory", function () {
  describe("depositFunds", async () => {
    let factory: any;
    beforeEach(async () => {
      const GreenerFactory = await ethers.getContractFactory("GreenerFactory");
      factory = await GreenerFactory.deploy();
      await factory.deployed();
    });

    it("Should revert ETH deposit if you attempt to pay 0", async () => {
      await expect(factory.depositFunds(0, ethers.constants.AddressZero)).to.be.revertedWith(
        "GreenerFactory__deposit__zero_deposit"
      );
    });

    it("Should revert ETH deposit if you don't transfer enough", async () => {
      await expect(factory.depositFunds(100, ethers.constants.AddressZero)).to.be.revertedWith(
        "GreenerFactory__deposit__less_than_declared"
      );
    });
  });
});
