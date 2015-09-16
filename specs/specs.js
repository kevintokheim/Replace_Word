describe('wordReplacer', function() {
  it('replaces one word with another', function(){
    expect(wordReplacer('hello world', 'world', 'universe')).to.equal('hello universe');
  });

  it('converts all capital letters to lowercase', function(){
    expect(wordReplacer('HELLO WORLD', 'WORLD', 'universe')).to.equal('hello universe');
  });

  it('finds a specific word when that word is repeated', function(){
    expect(wordReplacer("to be or not to be", "be", "eat")).to.equal("to eat or not to eat");
  });

  it('removes all special characters from a string', function(){
    expect(wordReplacer("'tis better to have loved than to have 'tis-ed", "better", "worse")).to.equal("tis worse to have loved than to have tised");
  });
});
