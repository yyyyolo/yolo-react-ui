function add(a:number,b:number){
  return a+b
}
describe('hhaha',()=>{
  it('add(1,3)',()=>{
    expect(add(1,2)).toEqual(3);
  })
})