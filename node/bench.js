const ONE = "ONE";
const TWO = "TWO";
const THREE = "THREE";
const FOUR = "FOUR";
const FIVE = "FIVE";

const TEXT = "text ";
const AND = " and ";

const ARR_ZERO = [TEXT];
const ARR_ONE = [TEXT, ONE];
const ARR_TWO = [TEXT, ONE, AND, TWO];
const ARR_THREE = [TEXT, ONE, AND, TWO, AND, THREE];
const ARR_FOUR = [TEXT, ONE, AND, TWO, AND, THREE, AND, FOUR];
const ARR_FIVE = [TEXT, ONE, AND, TWO, AND, THREE, AND, FOUR, AND, FIVE];
const ARR_TEN = [TEXT, ONE, AND, TWO, AND, THREE, AND, FOUR, AND, FIVE, AND, ONE, AND, TWO, AND, THREE, AND, FOUR, AND, FIVE];
const ARR_TWENTY = [
  TEXT,
  ONE,
  AND,
  TWO,
  AND,
  THREE,
  AND,
  FOUR,
  AND,
  FIVE,
  AND,
  ONE,
  AND,
  TWO,
  AND,
  THREE,
  AND,
  FOUR,
  AND,
  FIVE,
  AND,
  ONE,
  AND,
  TWO,
  AND,
  THREE,
  AND,
  FOUR,
  AND,
  FIVE,
  AND,
  ONE,
  AND,
  TWO,
  AND,
  THREE,
  AND,
  FOUR,
  AND,
  FIVE,
];

const ITERATIONS = 10_000_000;

const BENCH_FN = {
  literalStringConcat: {
    0: () => "text ",
    1: () => "text " + ONE,
    2: () => "text " + ONE + " and " + TWO,
    3: () => "text " + ONE + " and " + TWO + " and " + THREE,
    4: () => "text " + ONE + " and " + TWO + " and " + THREE + " and " + FOUR,
    5: () => "text " + ONE + " and " + TWO + " and " + THREE + " and " + FOUR + " and " + FIVE,
    10: () => "text " + ONE + " and " + TWO + " and " + THREE + " and " + FOUR + " and " + FIVE + ONE + " and " + TWO + " and " + THREE + " and " + FOUR + " and " + FIVE,
    20: () =>
      "text " +
      ONE +
      " and " +
      TWO +
      " and " +
      THREE +
      " and " +
      FOUR +
      " and " +
      FIVE +
      " and " +
      ONE +
      " and " +
      TWO +
      " and " +
      THREE +
      " and " +
      FOUR +
      " and " +
      FIVE +
      " and " +
      ONE +
      " and " +
      TWO +
      " and " +
      THREE +
      " and " +
      FOUR +
      " and " +
      FIVE +
      " and " +
      ONE +
      " and " +
      TWO +
      " and " +
      THREE +
      " and " +
      FOUR +
      " and " +
      FIVE,
  },
  templateStringConcat: {
    0: () => `text `,
    1: () => `text ${ONE}`,
    2: () => `text ${ONE} and ${TWO}`,
    3: () => `text ${ONE} and ${TWO} and ${THREE}`,
    4: () => `text ${ONE} and ${TWO} and ${THREE} and ${FOUR}`,
    5: () => `text ${ONE} and ${TWO} and ${THREE} and ${FOUR} and ${FIVE}`,
    10: () => `text ${ONE} and ${TWO} and ${THREE} and ${FOUR} and ${FIVE} and ${ONE} and ${TWO} and ${THREE} and ${FOUR} and ${FIVE}`,
    20: () =>
      `text ${ONE} and ${TWO} and ${THREE} and ${FOUR} and ${FIVE} and ${ONE} and ${TWO} and ${THREE} and ${FOUR} and ${FIVE} and ${ONE} and ${TWO} and ${THREE} and ${FOUR} and ${FIVE} and ${ONE} and ${TWO} and ${THREE} and ${FOUR} and ${FIVE}`,
  },
  concatMethod: {
    0: () => "text ",
    1: () => "text ".concat(ONE),
    2: () => "text ".concat(ONE, " and ", TWO),
    3: () => "text ".concat(ONE, " and ", TWO, " and ", THREE),
    4: () => "text ".concat(ONE, " and ", TWO, " and ", THREE, " and ", FOUR),
    5: () => "text ".concat(ONE, " and ", TWO, " and ", THREE, " and ", FOUR, " and ", FIVE),
    10: () => "text ".concat(ONE, " and ", TWO, " and ", THREE, " and ", FOUR, " and ", FIVE, " and ", ONE, " and ", TWO, " and ", THREE, " and ", FOUR, " and ", FIVE),
    20: () =>
      "text ".concat(
        ONE,
        " and ",
        TWO,
        " and ",
        THREE,
        " and ",
        FOUR,
        " and ",
        FIVE,
        " and ",
        ONE,
        " and ",
        TWO,
        " and ",
        THREE,
        " and ",
        FOUR,
        " and ",
        FIVE,
        " and ",
        ONE,
        " and ",
        TWO,
        " and ",
        THREE,
        " and ",
        FOUR,
        " and ",
        FIVE,
        " and ",
        ONE,
        " and ",
        TWO,
        " and ",
        THREE,
        " and ",
        FOUR,
        " and ",
        FIVE
      ),
  },
  concatMethodChained: {
    0: () => "text ",
    1: () => "text ".concat(ONE),
    2: () => "text ".concat(ONE).concat(" and ").concat(TWO),
    3: () => "text ".concat(ONE).concat(" and ").concat(TWO).concat(" and ").concat(THREE),
    4: () => "text ".concat(ONE).concat(" and ").concat(TWO).concat(" and ").concat(THREE).concat(" and ").concat(FOUR),
    5: () => "text ".concat(ONE).concat(" and ").concat(TWO).concat(" and ").concat(THREE).concat(" and ").concat(FOUR).concat(" and ").concat(FIVE),
    10: () =>
      "text "
        .concat(ONE)
        .concat(" and ")
        .concat(TWO)
        .concat(" and ")
        .concat(THREE)
        .concat(" and ")
        .concat(FOUR)
        .concat(" and ")
        .concat(FIVE)
        .concat(" and ")
        .concat(ONE)
        .concat(" and ")
        .concat(TWO)
        .concat(" and ")
        .concat(THREE)
        .concat(" and ")
        .concat(FOUR)
        .concat(" and ")
        .concat(FIVE),
    20: () =>
      "text "
        .concat(ONE)
        .concat(" and ")
        .concat(TWO)
        .concat(" and ")
        .concat(THREE)
        .concat(" and ")
        .concat(FOUR)
        .concat(" and ")
        .concat(FIVE)
        .concat(" and ")
        .concat(ONE)
        .concat(" and ")
        .concat(TWO)
        .concat(" and ")
        .concat(THREE)
        .concat(" and ")
        .concat(FOUR)
        .concat(" and ")
        .concat(FIVE)
        .concat(" and ")
        .concat(ONE)
        .concat(" and ")
        .concat(TWO)
        .concat(" and ")
        .concat(THREE)
        .concat(" and ")
        .concat(FOUR)
        .concat(" and ")
        .concat(FIVE)
        .concat(" and ")
        .concat(ONE)
        .concat(" and ")
        .concat(TWO)
        .concat(" and ")
        .concat(THREE)
        .concat(" and ")
        .concat(FOUR)
        .concat(" and ")
        .concat(FIVE),
  },
  concatMethodChainedLikeTypeScriptEs5: {
    0: () => "text ",
    1: () => "text ".concat(ONE),
    2: () => "text ".concat(ONE, " and ").concat(TWO),
    3: () => "text ".concat(ONE, " and ").concat(TWO, " and ").concat(THREE),
    4: () => "text ".concat(ONE, " and ").concat(TWO, " and ").concat(THREE).concat(" and ").concat(FOUR),
    5: () => "text ".concat(ONE, " and ").concat(TWO, " and ").concat(THREE, " and ").concat(FOUR, " and ").concat(FIVE),
    10: () =>
      "text "
        .concat(ONE, " and ")
        .concat(TWO, " and ")
        .concat(THREE, " and ")
        .concat(FOUR, " and ")
        .concat(FIVE, " and ")
        .concat(ONE, " and ")
        .concat(TWO, " and ")
        .concat(THREE, " and ")
        .concat(FOUR, " and ")
        .concat(FIVE),
    20: () =>
      "text "
        .concat(ONE, " and ")
        .concat(TWO, " and ")
        .concat(THREE, " and ")
        .concat(FOUR, " and ")
        .concat(FIVE, " and ")
        .concat(ONE, " and ")
        .concat(TWO, " and ")
        .concat(THREE, " and ")
        .concat(FOUR, " and ")
        .concat(FIVE, " and ")
        .concat(ONE, " and ")
        .concat(TWO, " and ")
        .concat(THREE, " and ")
        .concat(FOUR, " and ")
        .concat(FIVE, " and ")
        .concat(ONE, " and ")
        .concat(TWO, " and ")
        .concat(THREE, " and ")
        .concat(FOUR, " and ")
        .concat(FIVE),
  },
  arrayJoin: {
    0: () => [TEXT].join(""),
    1: () => [TEXT, ONE].join(""),
    2: () => [TEXT, ONE, AND, TWO].join(""),
    3: () => [TEXT, ONE, AND, TWO, AND, THREE].join(""),
    4: () => [TEXT, ONE, AND, TWO, AND, THREE, AND, FOUR].join(""),
    5: () => [TEXT, ONE, AND, TWO, AND, THREE, AND, FOUR, AND, FIVE].join(""),
    10: () => [TEXT, ONE, AND, TWO, AND, THREE, AND, FOUR, AND, FIVE, AND, ONE, AND, TWO, AND, THREE, AND, FOUR, AND, FIVE].join(""),
    20: () =>
      [
        TEXT,
        ONE,
        AND,
        TWO,
        AND,
        THREE,
        AND,
        FOUR,
        AND,
        FIVE,
        AND,
        ONE,
        AND,
        TWO,
        AND,
        THREE,
        AND,
        FOUR,
        AND,
        FIVE,
        AND,
        ONE,
        AND,
        TWO,
        AND,
        THREE,
        AND,
        FOUR,
        AND,
        FIVE,
        AND,
        ONE,
        AND,
        TWO,
        AND,
        THREE,
        AND,
        FOUR,
        AND,
        FIVE,
      ].join(""),
  },
  arrayJoinPreallocated: {
    0: () => ARR_ZERO.join(""),
    1: () => ARR_ONE.join(""),
    2: () => ARR_TWO.join(""),
    3: () => ARR_THREE.join(""),
    4: () => ARR_FOUR.join(""),
    5: () => ARR_FIVE.join(""),
    10: () => ARR_TEN.join(""),
    20: () => ARR_TWENTY.join(""),
  },
};

function benchInBlock(benchName, act, iterations = ITERATIONS) {
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    act();
  }
  const end = performance.now();
  const duration = end - start;
  return { benchName, iterations, duration };
}

function benchAllLength(benchName) {
  return Object.entries(BENCH_FN[benchName]).map(([benchLenght, benchFn]) => ({
    ...benchInBlock(benchName, benchFn),
    benchLenght,
  }));
}

export function runBench() {
  return [...Object.keys(BENCH_FN).flatMap(benchAllLength)];
}
