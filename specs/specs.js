describe('inputString', function() {
  it('returns a string', function(){
    expect(wordFinder('hello world')).to.equal('hello world');
  });
});

describe('wordFinder', function() {
  it('allows the user to choose a specific word', function(){
    expect(wordFinder('world')).to.equal('world');
  });
});
