import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display weak if pass 5 as value', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5(weak)');
  });
  it('should display strong if pass 11 as value', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(11)).toEqual('11(strong)');
  });
  it('should display strongest if pass 20 as value', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(20)).toEqual('20(strongest)');
  });
});
