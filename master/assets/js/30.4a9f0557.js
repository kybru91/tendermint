(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{584:function(e,t,a){e.exports=a.p+"assets/img/adr-046-fig1.58c75cb8.png"},853:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"adr-046-lite-client-implementation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adr-046-lite-client-implementation"}},[e._v("#")]),e._v(" ADR 046: Lite Client Implementation")]),e._v(" "),n("h2",{attrs:{id:"changelog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),n("ul",[n("li",[e._v("13-02-2020: Initial draft")]),e._v(" "),n("li",[e._v("26-02-2020: Cross-checking the first header")]),e._v(" "),n("li",[e._v("28-02-2020: Bisection algorithm details")]),e._v(" "),n("li",[e._v("31-03-2020: Verify signature got changed")])]),e._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),n("p",[e._v("A "),n("code",[e._v("Client")]),e._v(" struct represents a light client, connected to a single blockchain.")]),e._v(" "),n("p",[e._v("The user has an option to verify headers using "),n("code",[e._v("VerifyHeader")]),e._v(" or\n"),n("code",[e._v("VerifyHeaderAtHeight")]),e._v(" or "),n("code",[e._v("Update")]),e._v(" methods. The latter method downloads the\nlatest header from primary and compares it with the currently trusted one.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBDbGllbnQgaW50ZXJmYWNlIHsKCS8vIHZlcmlmeSBuZXcgaGVhZGVycwoJVmVyaWZ5SGVhZGVyQXRIZWlnaHQoaGVpZ2h0IGludDY0LCBub3cgdGltZS5UaW1lKSAoKnR5cGVzLlNpZ25lZEhlYWRlciwgZXJyb3IpCglWZXJpZnlIZWFkZXIobmV3SGVhZGVyICp0eXBlcy5TaWduZWRIZWFkZXIsIG5ld1ZhbHMgKnR5cGVzLlZhbGlkYXRvclNldCwgbm93IHRpbWUuVGltZSkgZXJyb3IKCVVwZGF0ZShub3cgdGltZS5UaW1lKSAoKnR5cGVzLlNpZ25lZEhlYWRlciwgZXJyb3IpCgoJLy8gZ2V0IHRydXN0ZWQgaGVhZGVycyAmYW1wOyB2YWxpZGF0b3JzCglUcnVzdGVkSGVhZGVyKGhlaWdodCBpbnQ2NCkgKCp0eXBlcy5TaWduZWRIZWFkZXIsIGVycm9yKQoJVHJ1c3RlZFZhbGlkYXRvclNldChoZWlnaHQgaW50NjQpICh2YWxTZXQgKnR5cGVzLlZhbGlkYXRvclNldCwgaGVpZ2h0VXNlZCBpbnQ2NCwgZXJyIGVycm9yKQoJTGFzdFRydXN0ZWRIZWlnaHQoKSAoaW50NjQsIGVycm9yKQoJRmlyc3RUcnVzdGVkSGVpZ2h0KCkgKGludDY0LCBlcnJvcikKCgkvLyBxdWVyeSBjb25maWd1cmF0aW9uIG9wdGlvbnMKCUNoYWluSUQoKSBzdHJpbmcKCVByaW1hcnkoKSBwcm92aWRlci5Qcm92aWRlcgoJV2l0bmVzc2VzKCkgW11wcm92aWRlci5Qcm92aWRlcgoKCUNsZWFudXAoKSBlcnJvcgp9Cg=="}}),e._v(" "),n("p",[e._v("A new light client can either be created from scratch (via "),n("code",[e._v("NewClient")]),e._v(") or\nusing the trusted store (via "),n("code",[e._v("NewClientFromTrustedStore")]),e._v("). When there's some\ndata in the trusted store and "),n("code",[e._v("NewClient")]),e._v(" is called, the light client will a)\ncheck if stored header is more recent b) optionally ask the user whenever it\nshould rollback (no confirmation required by default).")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdDbGllbnQoCgljaGFpbklEIHN0cmluZywKCXRydXN0T3B0aW9ucyBUcnVzdE9wdGlvbnMsCglwcmltYXJ5IHByb3ZpZGVyLlByb3ZpZGVyLAoJd2l0bmVzc2VzIFtdcHJvdmlkZXIuUHJvdmlkZXIsCgl0cnVzdGVkU3RvcmUgc3RvcmUuU3RvcmUsCglvcHRpb25zIC4uLk9wdGlvbikgKCpDbGllbnQsIGVycm9yKSB7Cg=="}}),e._v(" "),n("p",[n("code",[e._v("witnesses")]),e._v(" as argument (as opposite to "),n("code",[e._v("Option")]),e._v(") is an intentional choice,\nmade to increase security by default. At least one witness is required,\nalthough, right now, the light client does not check that primary != witness.\nWhen cross-checking a new header with witnesses, minimum number of witnesses\nrequired to respond: 1. Note the very first header ("),n("code",[e._v("TrustOptions.Hash")]),e._v(") is\nalso cross-checked with witnesses for additional security.")]),e._v(" "),n("p",[e._v("Due to bisection algorithm nature, some headers might be skipped. If the light\nclient does not have a header for height "),n("code",[e._v("X")]),e._v(" and "),n("code",[e._v("VerifyHeaderAtHeight(X)")]),e._v(" or\n"),n("code",[e._v("VerifyHeader(H#X)")]),e._v(" methods are called, these will perform either a) backwards\nverification from the latest header back to the header at height "),n("code",[e._v("X")]),e._v(" or b)\nbisection verification from the first stored header to the header at height "),n("code",[e._v("X")]),e._v(".")]),e._v(" "),n("p",[n("code",[e._v("TrustedHeader")]),e._v(", "),n("code",[e._v("TrustedValidatorSet")]),e._v(" only communicate with the trusted store.\nIf some header is not there, an error will be returned indicating that\nverification is required.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQcm92aWRlciBpbnRlcmZhY2UgewoJQ2hhaW5JRCgpIHN0cmluZwoKCVNpZ25lZEhlYWRlcihoZWlnaHQgaW50NjQpICgqdHlwZXMuU2lnbmVkSGVhZGVyLCBlcnJvcikKCVZhbGlkYXRvclNldChoZWlnaHQgaW50NjQpICgqdHlwZXMuVmFsaWRhdG9yU2V0LCBlcnJvcikKfQo="}}),e._v(" "),n("p",[e._v("Provider is a full node usually, but can be another light client. The above\ninterface is thin and can accommodate many implementations.")]),e._v(" "),n("p",[e._v("If provider (primary or witness) becomes unavailable for a prolonged period of\ntime, it will be removed to ensure smooth operation.")]),e._v(" "),n("p",[e._v("Both "),n("code",[e._v("Client")]),e._v(" and providers expose chain ID to track if there are on the same\nchain. Note, when chain upgrades or intentionally forks, chain ID changes.")]),e._v(" "),n("p",[e._v("The light client stores headers & validators in the trusted store:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBTdG9yZSBpbnRlcmZhY2UgewoJU2F2ZVNpZ25lZEhlYWRlckFuZFZhbGlkYXRvclNldChzaCAqdHlwZXMuU2lnbmVkSGVhZGVyLCB2YWxTZXQgKnR5cGVzLlZhbGlkYXRvclNldCkgZXJyb3IKCURlbGV0ZVNpZ25lZEhlYWRlckFuZFZhbGlkYXRvclNldChoZWlnaHQgaW50NjQpIGVycm9yCgoJU2lnbmVkSGVhZGVyKGhlaWdodCBpbnQ2NCkgKCp0eXBlcy5TaWduZWRIZWFkZXIsIGVycm9yKQoJVmFsaWRhdG9yU2V0KGhlaWdodCBpbnQ2NCkgKCp0eXBlcy5WYWxpZGF0b3JTZXQsIGVycm9yKQoKCUxhc3RTaWduZWRIZWFkZXJIZWlnaHQoKSAoaW50NjQsIGVycm9yKQoJRmlyc3RTaWduZWRIZWFkZXJIZWlnaHQoKSAoaW50NjQsIGVycm9yKQoKCVNpZ25lZEhlYWRlckFmdGVyKGhlaWdodCBpbnQ2NCkgKCp0eXBlcy5TaWduZWRIZWFkZXIsIGVycm9yKQoKCVBydW5lKHNpemUgdWludDE2KSBlcnJvcgoKCVNpemUoKSB1aW50MTYKfQo="}}),e._v(" "),n("p",[e._v("At the moment, the only implementation is the "),n("code",[e._v("db")]),e._v(" store (wrapper around the KV\ndatabase, used in Tendermint). In the future, remote adapters are possible\n(e.g. "),n("code",[e._v("Postgresql")]),e._v(").")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBWZXJpZnkoCgljaGFpbklEIHN0cmluZywKCXRydXN0ZWRIZWFkZXIgKnR5cGVzLlNpZ25lZEhlYWRlciwgLy8gaGVpZ2h0PVgKCXRydXN0ZWRWYWxzICp0eXBlcy5WYWxpZGF0b3JTZXQsIC8vIGhlaWdodD1YIG9yIGhlaWdodD1YKzEKCXVudHJ1c3RlZEhlYWRlciAqdHlwZXMuU2lnbmVkSGVhZGVyLCAvLyBoZWlnaHQ9WQoJdW50cnVzdGVkVmFscyAqdHlwZXMuVmFsaWRhdG9yU2V0LCAvLyBoZWlnaHQ9WQoJdHJ1c3RpbmdQZXJpb2QgdGltZS5EdXJhdGlvbiwKCW5vdyB0aW1lLlRpbWUsCgltYXhDbG9ja0RyaWZ0IHRpbWUuRHVyYXRpb24sCgl0cnVzdExldmVsIHRtbWF0aC5GcmFjdGlvbikgZXJyb3Igewo="}}),e._v(" "),n("p",[n("code",[e._v("Verify")]),e._v(" pure function is exposed for a header verification. It handles both\ncases of adjacent and non-adjacent headers. In the former case, it compares the\nhashes directly (2/3+ signed transition). Otherwise, it verifies 1/3+\n("),n("code",[e._v("trustLevel")]),e._v(") of trusted validators are still present in new validators.")]),e._v(" "),n("p",[e._v("While "),n("code",[e._v("Verify")]),e._v(" function is certainly handy, "),n("code",[e._v("VerifyAdjacent")]),e._v(" and\n"),n("code",[e._v("VerifyNonAdjacent")]),e._v(" should be used most often to avoid logic errors.")]),e._v(" "),n("h3",{attrs:{id:"bisection-algorithm-details"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bisection-algorithm-details"}},[e._v("#")]),e._v(" Bisection algorithm details")]),e._v(" "),n("p",[e._v("Non-recursive bisection algorithm was implemented despite the spec containing\nthe recursive version. There are two major reasons:")]),e._v(" "),n("ol",[n("li",[e._v("Constant memory consumption => no risk of getting OOM (Out-Of-Memory) exceptions;")]),e._v(" "),n("li",[e._v("Faster finality (see Fig. 1).")])]),e._v(" "),n("p",[n("em",[e._v("Fig. 1: Differences between recursive and non-recursive bisections")])]),e._v(" "),n("p",[n("img",{attrs:{src:a(584),alt:"Fig. 1"}})]),e._v(" "),n("p",[e._v("Specification of the non-recursive bisection can be found\n"),n("a",{attrs:{href:"https://github.com/tendermint/spec/blob/zm_non-recursive-verification/spec/consensus/light-client/non-recursive-verification.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),n("p",[e._v("Implemented")]),e._v(" "),n("h2",{attrs:{id:"consequences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),n("h3",{attrs:{id:"positive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),n("ul",[n("li",[e._v("single "),n("code",[e._v("Client")]),e._v(" struct, which is easy to use")]),e._v(" "),n("li",[e._v("flexible interfaces for header providers and trusted storage")])]),e._v(" "),n("h3",{attrs:{id:"negative"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("Verify")]),e._v(" needs to be aligned with the current spec")])]),e._v(" "),n("h3",{attrs:{id:"neutral"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("Verify")]),e._v(" function might be misused (called with non-adjacent headers in\nincorrectly implemented sequential verification)")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);