// split the code into an array of characters
// filter out all the characters that aren't divisible by 7 (when 0 index accounted for)
// then join them back together
let crack = code => code.split("").filter((char, i) => (i + 1) % 7 === 0).join("");

// Answer by Ian from Cohort #11

const cracked = crack("_5X4EjG4Cm9#Eo 8Dd@Cov_6kNhdk6W8_J .hZ3yTwr6JZ#qoD.74mErj7 2Wbk_wEUx8.X7.v_. D9@Hq Y3Nu.7aot5Ay.8u.Z339z T!98NrdzD@7C2iJ.jf 8d.Upf6X r7P@BSi#xN7H t!YGp8h!5_SygM");

console.log(cracked);
