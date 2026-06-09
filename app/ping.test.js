// Small, simple unit test: verifies the shape of the /ping response payload.
function buildCountResponse(count: number) {
  return { count };
}

describe('buildCountResponse', () => {
  it('wraps the counter value in a { count } object', () => {
    expect(buildCountResponse(5)).toEqual({ count: 5 });
  });

  it('works for zero', () => {
    expect(buildCountResponse(0)).toEqual({ count: 0 });
  });
});