import assert from 'assert';

function gcd (a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

assert(gcd(48, 18) === 6);
assert(gcd(54, 24) === 6);
assert(gcd(48, 180) === 12);

finish(42);
