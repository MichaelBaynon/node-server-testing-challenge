const db = require("../data/dbConfig");
const Weapons = require("./weaponsModel");

describe("weapons model", () => {
  beforeEach(async () => {
    await db("weapons").truncate();
  });

  describe("add function", () => {
    it("adds weapons into the db", async () => {
      let weaponsNumber;
      weaponsNumber = await db("weapons");
      expect(weaponsNumber).toHaveLength(0);
      await Weapons.insert({ weapon: "Pump Shotgun" });
      weaponsNumber = await db('weapons')
      expect(weaponsNumber).toHaveLength(1);
    });

    it('inserts the provided weapon into the db', async () => {
        let weapon = await Weapons.insert({weapon: 'Pump Shotgun'})
        expect(weapon.weapon).toBe('Pump Shotgun')
    })
  });
});
