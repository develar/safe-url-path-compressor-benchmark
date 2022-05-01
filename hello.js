const j = require("./d")
//
// const d = j.crush("!((fieldsG(n:t,sqlDtoUnixTimestamp(A)*1000'4(n:C4tc_installerK,tcKBc1Bc2Bc3,E4db:ij,filtersG9product8IUHproject8'simple for IJ'HE8!(.550F551F772F773)HA,qD>subtractMonths(now(41)'HC,oD!!='80)4order:t).intellij-macos-hw-unit-14)Bbuild_8,v:9(f:Agenerated_timeB,6CappInit_dD:'EmachineF,.G:!(H49K_6idKHGFEDCBA9864.,(fieldsG(n:t,sqlDtoUnixTimestamp(A)*1000'4(n64tc_installerK,tcKC1C2C3,E4db:ij,filtersGHduct9IU4Hject9'simple for IJ'4BE9!(.550F551F772F773)4BA,qD>subtractMonths(now(41)'4(f6,oD!!='90)4order:t).intellij-macos-hw-unit-14),6:appInitPreparation_d8build_9,v:Agenerated_timeB(f:C,8cD:'EmachineF,.G:!(HBproK_8idKHGFEDCBA9864.,(fieldsH(n:t,sqlDtoUnixTimestamp(A)*1000'4(n:B4tc_installGL,tcLCc1Cc2Cc3,E4db:ij,filtGsH9product8IUKproject8'simple for IJ'KE8!(.550F551F772F773)KA,qD>subtractMonths(now(41)'KB,oD!!='80)4ordG:t).intellij-macos-hw-unit-14)Cbuild_8,v:9(f:AgenGated_timeBappStartG_dC,6D:'EmachineF,.GerH:!(K49L_6idLKHGFEDCBA9864.,(fieldsG(n:t,sqlDtoUnixTimestamp(A)*1000'4(n:B4tc_installerK,tcKCc1Cc2Cc3,E4db:ij,filtersG9product8IUHproject8'simple for IJ'HE8!(.550F551F772F773)HA,qD>subtractMonths(now(41)'HB,oD!!='80)4order:t).intellij-macos-hw-unit-14)Cbuild_8,v:9(f:Agenerated_timeBbootstrap_dC,6D:'EmachineF,.G:!(H49K_6idKHGFEDCBA9864.,(fieldsG(n:t,sqlDtoUnixTimestamp(A)*1000'4(n:B4tc_HstallerL,tcLCc1Cc2Cc3,E4db:ij,filtersG9product8IUKproject8'simple for IJ'KE8!(.550F551F772F773)KA,qD>subtractMonths(now(41)'KB,oD!!='80)4order:t).Htellij-macos-hw-unit-14)Cbuild_8,v:9(f:Agenerated_timeBeuaShowHg_dC,6D:'EmachHeF,.G:!(HinK49L_6idLKHGFEDCBA9864.,(fieldsK(n:t,sqlEtoUnixTimestamp(A)*1000'6(n46tc_HstallerO,tcOCc1Cc2Cc3,F6db:ij,filtersKNduct9IU6Nject9'simple for IJ'6BF9!(.550G551G772G773)6BA,qE>subtractMonths(now(61)'6(f4,oE!!='90)6order:t).Htellij-macos-hw-unit-14:plugHDescriptorLoadHg_d6)Cbuild_9,v:Agenerated_timeB(f:C,8E:'FmachHeG,.HinK:!(NBproO_8idONKHGFECBA9864.)")
// const s = j.uncrush(decodeURIComponent("!((fieldsG(n:t,sqlHtoUnixTimestamp(8)*1000'4(n:DComponentCreation_d4tc_installerK,tcKBc1Bc2Bc3,E4db:ij,filtersG9productAIU49DA'simple%20for%20IJ'49EA!(.550F551F772F773)498,qH>subtractMonths(now(41)')4order:t).intellij-macos-hw-unit-14)Bbuild_8generated_time9(f:A,v:B,6DprojectEmachineF,.G:!(H:'K_6id%01KHGFEDBA9864.,(fieldsG(n:t,sqlHtoUnixTimestamp(8)*1000'4(n:DServiceAsyncPreloadKg_d4tc_KstallerL,tcLCc1Cc2Cc3,E4db:ij,filtersG9productBIU49DB'simple%20for%20IJ'49EB!(.550F551F772F773)498,qH>subtractMonths(now(41)')4order:t).Ktellij-macos-hw-unit-14)Cbuild_8generated_time9(f:B,v:C,6DprojectEmachKeF,.G:!(H:'KinL_6id%01LKHGFEDCB9864.,(fieldsF(n:t,sqlGtoUnixTimestamp(8)*1000'4(n:CServiceSyncPreloadHg_d4tc_HstallerK,tcKBc1Bc2Bc3,D4db:ij,filtersF9productAIU49CA'simple%20for%20IJ'49DA!(.550E551E772E773)498,qG>subtractMonths(now(41)')4order:t).Htellij-macos-hw-unit-14)Bbuild_8generated_time9(f:A,v:B,6CprojectDmachHeE,.F:!(G:'HinK_6id%01KHGFEDCBA9864"))
//
// console.log("-".repeat(40))
//
// console.log(d.length)
// console.log(d)
//
// console.log("decoded" + s.length)
// console.log(s)
//
const JSONCrush = require("jsoncrush")
const Rison = require("rison-node")
const lzString = require("lz-string")

const sample = [{
  "db": "sharedIndexes",
  "fields": [{"n": "t", "sql": "toUnixTimestamp(generated_time) * 1000"}, {
    "n": "measures",
    "subName": "value",
  }, "tc_installer_build_id", "tc_build_id", "build_c1", "build_c2", "build_c3", "machine"],
  "filters": [{"f": "project", "v": "intellij_sources/indexing"}, {"f": "branch", "v": "master"}, {
    "f": "machine",
    "v": ["intellij-linux-hw-blade-023", "intellij-linux-hw-blade-024", "intellij-linux-hw-blade-025", "intellij-linux-hw-blade-026", "intellij-linux-hw-blade-027", "intellij-linux-hw-blade-028", "intellij-linux-hw-blade-029", "intellij-linux-hw-blade-030", "intellij-linux-hw-blade-031", "intellij-linux-hw-blade-032", "intellij-linux-hw-blade-033", "intellij-linux-hw-blade-034", "intellij-linux-hw-blade-035", "intellij-linux-hw-blade-036", "intellij-linux-hw-blade-037", "intellij-linux-hw-blade-038", "intellij-linux-hw-blade-039", "intellij-linux-hw-blade-040", "intellij-linux-hw-blade-041", "intellij-linux-hw-blade-042", "intellij-linux-hw-blade-043", "intellij-linux-hw-blade-044", "intellij-linux-hw-blade-045", "intellij-linux-hw-blade-046", "intellij-linux-hw-blade-047", "intellij-linux-hw-blade-048", "intellij-linux-hw-blade-049"],
  }, {"f": "generated_time", "q": "> subtractMonths(now(), 3)"}, {"f": "measures.name", "v": "indexing"}, {"f": "measures.value", "o": "!=", "v": 0}],
  "order": "t",
}, {
  "db": "sharedIndexes",
  "fields": [{"n": "t", "sql": "toUnixTimestamp(generated_time) * 1000"}, {
    "n": "measures",
    "subName": "value",
  }, "tc_installer_build_id", "tc_build_id", "build_c1", "build_c2", "build_c3", "machine"],
  "filters": [{"f": "project", "v": "community/indexing"}, {"f": "branch", "v": "master"}, {
    "f": "machine",
    "v": ["intellij-linux-hw-blade-023", "intellij-linux-hw-blade-024", "intellij-linux-hw-blade-025", "intellij-linux-hw-blade-026", "intellij-linux-hw-blade-027", "intellij-linux-hw-blade-028", "intellij-linux-hw-blade-029", "intellij-linux-hw-blade-030", "intellij-linux-hw-blade-031", "intellij-linux-hw-blade-032", "intellij-linux-hw-blade-033", "intellij-linux-hw-blade-034", "intellij-linux-hw-blade-035", "intellij-linux-hw-blade-036", "intellij-linux-hw-blade-037", "intellij-linux-hw-blade-038", "intellij-linux-hw-blade-039", "intellij-linux-hw-blade-040", "intellij-linux-hw-blade-041", "intellij-linux-hw-blade-042", "intellij-linux-hw-blade-043", "intellij-linux-hw-blade-044", "intellij-linux-hw-blade-045", "intellij-linux-hw-blade-046", "intellij-linux-hw-blade-047", "intellij-linux-hw-blade-048", "intellij-linux-hw-blade-049"],
  }, {"f": "generated_time", "q": "> subtractMonths(now(), 3)"}, {"f": "measures.name", "v": "indexing"}, {"f": "measures.value", "o": "!=", "v": 0}],
  "order": "t",
}]

console.time("json.stringify")
const jsonLength = JSON.stringify(sample).length
console.timeEnd("json.stringify")

console.time("json-crush")
report(JSONCrush.crush(JSON.stringify(sample)), "json-crush")
console.timeEnd("json-crush")

console.time("rison")
report(Rison.encode(sample), "rison")
console.timeEnd("rison")

console.time("rison-crush")
report(j.crush(Rison.encode(sample)), "rison-crush")
console.timeEnd("rison-crush")


console.time("lz-string-base64")
report(lzString.compressToBase64(JSON.stringify(sample)), "lz-string-base64")
console.timeEnd("lz-string-base64")

console.time("lz-string-uri")
report(lzString.compressToEncodedURIComponent(JSON.stringify(sample)), "lz-string-uri")
console.timeEnd("lz-string-uri")

function escapePathSegment(x) {
  let s = encodeURIComponent(x)
  if (s.length === x.length) {
    // nothing was escaped
    return s
  }
  return s
    .replace(/%2C/g, ',')
    .replace(/%3A/g, ':')
    .replace(/%40/g, '@')
    .replace(/%24/g, '$')
}

function report(data, title) {
  console.log(title + " " + "-".repeat(160))

  const escaped = escapePathSegment(data)

  console.log(`${data.length} | ${escaped.length} (diff: ${escaped.length - data.length}, original: ${jsonLength}, ratio: ${jsonLength/escaped.length})`)
  console.log(data)
  console.log(`   escaped ${escaped.length}: ---`)
  console.log(escaped)

  console.log("")
}

const JSONCrushSwap = (string, forward=1)=>
{
    // swap out characters for lesser used ones that wont get escaped
    const swapGroups =
    [
        ['"', "'"],
        ["':", "!"],
        [",'", "~"],
        ['}', ")", '\\', '\\'],
        ['{', "(", '\\', '\\'],
    ];

    const swapInternal=(string, g)=>
    {
        let regex = new RegExp(`${(g[2]?g[2]:'')+g[0]}|${(g[3]?g[3]:'')+g[1]}`,'g');
        return string.replace(regex, $1 => ($1 === g[0] ? g[1] : g[0]));
    }

    // need to be able to swap characters in reverse direction for uncrush
    if (forward)
        for (let i = 0; i < swapGroups.length; ++i)
            string = swapInternal(string, swapGroups[i]);
    else
        for (let i = swapGroups.length; i--;)
            string = swapInternal(string, swapGroups[i]);

    return string;
}