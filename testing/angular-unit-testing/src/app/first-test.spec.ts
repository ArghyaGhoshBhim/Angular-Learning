describe('First test case', () => {
  let testVariable: any;
  beforeEach(() => {
    testVariable = {};
  });
  it('should return true if a is true', () => {
    //arrange
    testVariable = false;
    //act
    testVariable = true;
    //assert
    expect(testVariable).toBe(true);
  });
});
