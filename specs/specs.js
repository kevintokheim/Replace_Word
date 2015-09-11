describe('inputString', function() {
  it('returns a string', function(){
    expect(inputString('hello world')).to.equal('hello world');
  });
});

describe('wordFinder', function(){
  it('finds a word within a string', function() {
    expect(wordFinder('hello world', 'world')).to.equal('world');
  });
});

describe('wordReplacer', function() {
  it('replaces one word with another', function(){
    expect(wordReplacer('hello world', 'world', 'universe')).to.equal('hello universe');
  });
});
