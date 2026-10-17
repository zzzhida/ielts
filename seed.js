/* 雅思冲刺簿 · 内置资料、方法卡和阶段任务
   改这里的内容后把 SEED_VERSION 加 1，已安装的设备下次打开会补上新增条目（不会覆盖你改过或删过的）。 */
window.SEED_VERSION = 2;

window.SEED_PHASES = [
  { start: "2026-10-18", end: "2026-11-15", name: "诊断 + 报名", daily: 60,
    focus: "限时做一套剑桥真题摸底，报好 2027 年 3 月的机考考位；每天 1 小时，先把习惯养起来" },
  { start: "2026-11-16", end: "2027-01-15", name: "打基础", daily: 90,
    focus: "词汇 + 听力精听 + 阅读题型（T/F/NG、标题匹配）；每周写 2 篇 Task 2" },
  { start: "2027-01-16", end: "2027-02-28", name: "寒假强化", daily: 210,
    focus: "每周 2 套完整模考加复盘；口语练当季题库" },
  { start: "2027-03-01", end: "2027-03-31", name: "一战", daily: 120,
    focus: "目标 7.0，单项不低于 6.5；考前一周只做真题保持手感" },
  { start: "2027-04-01", end: "2027-05-31", name: "保持", daily: 45,
    focus: "每天少量保持语感，精力主要放在期末和 GPA" },
  { start: "2027-06-01", end: "2027-08-31", name: "二战冲 7.5", daily: 180,
    focus: "只补短板（多半是写作）；8 月底前结束雅思" }
];

window.SEED_TODOS = [
  ["t-p1-1", "诊断 + 报名", "限时做一套剑桥真题（听、读、写），把成绩填进「成绩」页"],
  ["t-p1-2", "诊断 + 报名", "在英国文化协会香港官网报 2027 年 3 月的机考（澳科大就是考点）"],
  ["t-p1-3", "诊断 + 报名", "报好后在「设置 → 考试与目标」里填考试日期"],
  ["t-p1-4", "诊断 + 报名", "在「设置 → 每日提醒」导入日历提醒，或者给手机设个每日闹钟"],
  ["t-p1-5", "诊断 + 报名", "把这学期每门专业课的 syllabus 存一份（TU/e 申请要写课程描述）"],
  ["t-p2-1", "打基础", "王陆语料库按场景过一遍，边听边默写"],
  ["t-p2-2", "打基础", "AWL 学术词表 Sublist 1–5 背完，好词做成「表达」卡"],
  ["t-p2-3", "打基础", "阅读 T/F/NG 和标题匹配各专项练 3 套"],
  ["t-p2-4", "打基础", "每周 2 篇 Task 2，对照官方评分标准自评四项"],
  ["t-p3-1", "寒假强化", "每周 2 套完整模考，错题全部做成复习卡"],
  ["t-p3-2", "寒假强化", "整理当季口语题库 Part 2 的 6–8 个通用素材"],
  ["t-p3-3", "寒假强化", "做一次英国文化协会的机考模拟（熟悉界面和打字）"],
  ["t-p4-1", "一战", "考前一周每天一套听读，保持手感，不再学新方法"],
  ["t-p4-2", "一战", "考前一天确认报名用的证件、考点路线和报到时间"],
  ["t-p5-1", "保持", "出分后把四项填进「成绩」，决定要不要二战"],
  ["t-p6-1", "二战冲 7.5", "只练最弱的一项，每周至少 1 次完整模考"]
];

/* kind: link 链接 / note 笔记 / book 书 ；sec: L R W S V G(综合) */
window.SEED_MATS = [
  // —— 官方 & 报名 ——
  { id: "s-off-sample", sec: "G", kind: "link", title: "IELTS 官方 Academic 样题",
    url: "https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test",
    note: "四科各题型的官方样题，带答案和听力原文；写作附考官打分的范文和评语。先用它认识每种题型。" },
  { id: "s-bc-mock", sec: "G", kind: "link", title: "英国文化协会免费 Academic 模考（总览）",
    url: "https://takeielts.britishcouncil.org/prepare/ielts-free-practice-mock-tests/academic",
    note: "免费整套模考入口，四科分开做。页面上还有机考界面的熟悉测试。" },
  { id: "s-bc-l", sec: "L", kind: "link", title: "免费听力模考（英国文化协会）",
    url: "https://takeielts.britishcouncil.org/prepare/ielts-free-practice-mock-tests/academic/listening", note: "" },
  { id: "s-bc-r", sec: "R", kind: "link", title: "免费阅读模考（英国文化协会）",
    url: "https://takeielts.britishcouncil.org/prepare/ielts-free-practice-mock-tests/academic/reading", note: "" },
  { id: "s-bc-w", sec: "W", kind: "link", title: "免费写作模考 Task 1 + Task 2（英国文化协会）",
    url: "https://takeielts.britishcouncil.org/prepare/ielts-free-practice-mock-tests/academic/writing", note: "" },
  { id: "s-bc-s", sec: "S", kind: "link", title: "免费口语模考（英国文化协会）",
    url: "https://takeielts.britishcouncil.org/prepare/ielts-free-practice-mock-tests/academic/speaking", note: "" },
  { id: "s-idp-mock", sec: "G", kind: "link", title: "IDP 官方模考入口",
    url: "https://ielts.idp.com/prepare/article-access-official-ielts-mock-test", note: "另一家主办方的官方模考，可以和英国文化协会的交替用。" },
  { id: "s-wbd", sec: "W", kind: "link", title: "写作评分标准（官方公开版 PDF）",
    url: "https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-writing-band-descriptors.pdf",
    note: "TR/TA、CC、LR、GRA 四项每一档的描述。每篇作文写完都对照 6、7 两档自评，看差在哪一句。" },
  { id: "s-sbd", sec: "S", kind: "link", title: "口语评分标准（官方公开版 PDF）",
    url: "https://ielts.org/cdn/ielts-downloadable-assets/ielts-guidance-and-support/ielts-guides/ielts-speaking-band-descriptors.pdf",
    note: "流利度与连贯、词汇、语法、发音四项。7 分的关键是能展开说、少停顿，不是难词。" },
  { id: "s-macau", sec: "G", kind: "link", title: "澳门考点、日期与费用（英国文化协会香港）",
    url: "https://www.britishcouncil.hk/en/exam/ielts/dates-fees-locations",
    note: "澳门有 5 个考点，澳科大（氹仔偉龍馬路）就是机考考点。学术类机考 HK$3,140。澳门的口语是视频连线的面对面考试。" },
  { id: "s-book", sec: "G", kind: "link", title: "雅思报名入口（英国文化协会香港）",
    url: "https://www.britishcouncil.hk/en/exam/ielts/book-test",
    note: "机考一般 1–5 天出分。报 3 月的考位，越早选越有好日期。" },
  { id: "s-tue-lang", sec: "G", kind: "link", title: "TU/e 语言要求（2027–28）",
    url: "https://www.tue.nl/en/education/become-a-tue-student/admission-and-enrollment/language-proficiency-requirements",
    note: "IELTS 学术类总分 6.5、单项 6.0，四项必须是同一次考试；不认居家 IELTS Online 和单科重考；成绩 2 年有效。" },
  { id: "s-tue-docs", sec: "G", kind: "link", title: "TU/e 申请材料清单",
    url: "https://www.tue.nl/en/education/become-a-tue-student/admission-and-enrollment/documents-for-admission",
    note: "课程描述要求每门课写 5–10 个核心知识点，现在就开始存每门课的 syllabus。" },

  { id: "s-table", sec: "G", kind: "note", title: "听力 / 阅读 正确题数换算表（学术类）",
    url: "", note: "听力：39–40=9｜37–38=8.5｜35–36=8｜32–34=7.5｜30–31=7｜26–29=6.5｜23–25=6｜18–22=5.5｜16–17=5\n阅读：39–40=9｜37–38=8.5｜35–36=8｜33–34=7.5｜30–32=7｜27–29=6.5｜23–26=6｜19–22=5.5｜15–18=5\n目标：听读各 8 分 ≈ 每科 35 题以上；7.5 需要听力 32、阅读 33。\n官方每次考试会微调，这是常用的参考值。" },
  { id: "s-examday", sec: "G", kind: "note", title: "考试当天清单（机考）",
    url: "", note: "前一天：\n· 确认报名时用的证件原件，和准考信息上的姓名、号码一致\n· 确认考点地址和报到时间，提前 30 分钟到\n当天：\n· 听力有题目阅读时间，先看题划关键词\n· 机考听力结束后只有 2 分钟检查，没有 10 分钟誊写时间，边听边直接填好\n· 阅读可以在原文高亮，标题匹配放最后做\n· 写作先写 Task 2（40 分钟），屏幕右下角有字数统计\n· 口语听不清可以请考官重复，不扣分" },
  // —— 书 ——
  { id: "s-cam", sec: "G", kind: "book", title: "剑桥雅思真题（Cambridge IELTS Academic 4–20）",
    url: "", note: "主力材料。16–20 留着做整套限时模考；4–15 拿来分题型练、精听和阅读精读。剑 20 是 2025 年出版的。" },
  { id: "s-wanglu", sec: "L", kind: "book", title: "王陆《雅思王听力真题语料库》",
    url: "", note: "按场景整理的听力高频词。用法：听音频默写，错的词反复默写到对。适合打基础阶段。" },
  { id: "s-liu", sec: "R", kind: "book", title: "刘洪波《雅思阅读真经》",
    url: "", note: "题型方法和同义替换。配合剑桥真题的阅读部分一起用。" },
  { id: "s-gu", sec: "W", kind: "book", title: "顾家北《手把手教你雅思写作》",
    url: "", note: "Task 2 按话题分类给论证思路，适合从 6 分往 7 分走时建立「怎么展开一个论点」的框架。" },
  { id: "s-shen", sec: "S", kind: "book", title: "慎小嶷《十天突破雅思口语》",
    url: "", note: "Part 2 素材串联的思路。配合当季题库用，不要背整段答案。" },
  { id: "s-yasige", sec: "S", kind: "note", title: "雅思哥 App（口语当季题库）",
    url: "", note: "口语题库每年 1、5、9 月换季，考前用当季的。只拿题目练，不要背 App 里的参考答案。" },

  // —— 听力 ——
  { id: "s-bbc", sec: "L", kind: "link", title: "BBC Learning English（6 Minute English 等）",
    url: "https://www.bbc.co.uk/learningenglish/",
    note: "6 分钟一集，带文字稿，适合每天通勤听。先盲听，再对照文字稿找没听出的词。" },
  { id: "s-ted", sec: "L", kind: "link", title: "TED Talks",
    url: "https://www.ted.com/talks",
    note: "和 Section 4 的学术独白很像。挑 10 分钟以内、科技或社会话题的，用文字稿做精听。" },
  { id: "s-m-l", sec: "L", kind: "note", title: "精听方法（每天 30 分钟）",
    url: "", note: "用剑桥真题的 Section 3/4：\n1. 盲听做题，对答案\n2. 逐句听写，听不出的地方最多重放 3 次\n3. 对照原文，标出连读、弱读和题目里的同义替换\n4. 把同义替换记进「表达」卡\n5. 第二天再盲听一遍" },

  // —— 阅读 ——
  { id: "s-conv", sec: "R", kind: "link", title: "The Conversation（学者写的科普文章）",
    url: "https://theconversation.com/us/technology",
    note: "免费，话题和难度都接近雅思阅读。每天读一篇，用一句英文概括每段主旨，练的就是标题匹配题的能力。" },
  { id: "s-m-r", sec: "R", kind: "note", title: "阅读做题顺序与时间",
    url: "", note: "60 分钟 3 篇，建议 17 / 20 / 23 分钟。\n1. 先看题型和题目，划出关键词（专有名词、数字最好定位）\n2. 按题目顺序回原文定位（大多数题型顺序出题，标题匹配和段落信息匹配除外）\n3. 标题匹配放到最后做，那时你已经读过大部分段落\n4. 机考可以直接在原文高亮，用好这个功能" },

  // —— 写作 ——
  { id: "s-phrase", sec: "W", kind: "link", title: "Academic Phrasebank（曼彻斯特大学）",
    url: "https://www.phrasebank.manchester.ac.uk/",
    note: "学术写作句型库。Task 2 的论证、让步、举例，Task 1 的数据描述都能借用，改写成自己的句子再用。" },
  { id: "s-awl", sec: "V", kind: "link", title: "AWL 学术词表（570 个词族，分 10 个子表）",
    url: "https://www.wgtn.ac.nz/lals/resources/academicwordlist",
    note: "学术写作和阅读最常用的词。先背 Sublist 1–5，网站上还有自测题。" },
  { id: "s-ozdic", sec: "W", kind: "link", title: "Ozdic 英语搭配词典",
    url: "https://ozdic.com/",
    note: "查「这个名词配什么动词/形容词」，避免中式搭配。LR 从 6 到 7 很大程度靠搭配准确。" },
  { id: "s-oald", sec: "V", kind: "link", title: "牛津高阶学习词典（在线）",
    url: "https://www.oxfordlearnersdictionaries.com/",
    note: "例句好，并且标了学术词（AWL）和搭配。" },
  { id: "s-liz", sec: "W", kind: "link", title: "IELTS Liz（前考官的免费课程和范文）",
    url: "https://www.ieltsliz.com/",
    note: "免费课程和范文，按科目分类，写作和口语部分尤其有用。" },
  { id: "s-simon", sec: "W", kind: "link", title: "IELTS Simon（前考官）",
    url: "https://ieltssimon.substack.com/about",
    note: "范文以简洁清晰著称，适合学「用简单的词写出 7 分以上的逻辑」。" },
  { id: "s-adv", sec: "W", kind: "link", title: "IELTS Advantage",
    url: "https://www.ieltsadvantage.com/about",
    note: "写作方法讲得系统，有大量免费文章。" },
  { id: "s-m-w", sec: "W", kind: "note", title: "写作自评流程",
    url: "", note: "每篇作文：\n1. 40 分钟限时写完（Task 2），字数 270–300\n2. 隔一天，对照官方评分标准给四项打分\n3. 找 3 处可以换得更准确的表达，做成「表达」卡\n4. 把作文交给老师或 AI 批改，分数和意见填回「写作批改」\n5. 一周后同一题重写一遍" },

  // —— 口语 ——
  { id: "s-cdp", sec: "S", kind: "link", title: "剑桥词典（发音，英美音都有）",
    url: "https://dictionary.cambridge.org/pronunciation/",
    note: "不确定的词先查发音再用，尤其是重音位置。" },
  { id: "s-m-s", sec: "S", kind: "note", title: "口语练习方法",
    url: "", note: "1. 用当季题库，每天 3 道 Part 1 + 1 道 Part 2\n2. Part 2 计时：1 分钟只写关键词，然后说满 2 分钟\n3. 全程录音，回听时只找两类问题：明显语法错误（时态、单复数）和卡顿超过 3 秒的地方\n4. 同一题第二天再录一遍，对比" },

  // —— 词汇工具 ——
  { id: "s-anki", sec: "V", kind: "link", title: "Anki（间隔复习单词卡）",
    url: "https://apps.ankiweb.net/",
    note: "安卓版 AnkiDroid 免费。背大量单词用 Anki，错题和写作表达用本应用的「复习」页。" }
];

/* 方法卡和表达卡（Claude 整理，可以随意修改或删除） */
window.SEED_CARDS = [
  ["s-c01", "表达", "W", "上升的说法（Task 1）", "rise / increase / grow / climb\n急剧上升：surge, soar, rocket\n例：The number of users surged from 2 million to 9 million between 2010 and 2015."],
  ["s-c02", "表达", "W", "下降的说法（Task 1）", "fall / decline / decrease / drop\n急剧下降：plummet, plunge\n例：Sales plummeted to just under 500 units in 2020."],
  ["s-c03", "表达", "W", "波动与平稳（Task 1）", "fluctuate (between X and Y)\nremain stable / level off / plateau (at)\n例：The figure levelled off at around 40% after 2018."],
  ["s-c04", "表达", "W", "峰值和低谷（Task 1）", "peak at / reach a peak of\nhit a low of / bottom out at\n例：Unemployment peaked at 12% in 2009."],
  ["s-c05", "表达", "W", "占比（Task 1 饼图）", "account for / make up / constitute + 百分比\n例：Coal accounted for roughly a third of total energy production."],
  ["s-c06", "表达", "W", "约数", "approximately, roughly, around, nearly\njust under / just over / well over\n例：just over half of the respondents"],
  ["s-c07", "表达", "W", "Task 1 概述句", "Overall, it is clear that ...\nThe most striking feature is that ...\n概述必须有，而且不写具体数字。没有概述 TA 很难上 6。"],
  ["s-c08", "表达", "W", "让步再反驳（Task 2）", "While it is true that X, I would argue that Y.\nAlthough X has some merit, Y is more convincing because ..."],
  ["s-c09", "表达", "W", "举例（Task 2）", "A case in point is ...\nThis is exemplified by ...\nFor instance, in China, ..."],
  ["s-c10", "表达", "W", "因果（Task 2）", "X leads to / results in / gives rise to Y\nY stems from / is attributable to X"],
  ["s-c11", "表达", "W", "替换 important", "crucial, vital, essential, of great significance\n同一段里不要连续换着堆，选一个最准确的。"],
  ["s-c12", "表达", "W", "替换 people", "individuals, the public, citizens, residents, consumers（看语境选）"],
  ["s-c13", "方法", "R", "TRUE 和 NOT GIVEN 怎么分", "原文明确表达了同样的意思 → TRUE\n原文没提到，或者无法判断 → NOT GIVEN\n不要用常识去推理，只看原文。"],
  ["s-c14", "方法", "R", "什么时候选 FALSE", "原文和题干直接矛盾：数字不同、频率不同（always vs sometimes）、比较方向相反、因果反了。"],
  ["s-c15", "方法", "R", "标题匹配", "看段落首句、末句和转折词（however, but）后面的内容找主旨。\n别被段落中间某个和标题相同的细节词吸引。"],
  ["s-c16", "方法", "L", "地图题", "先确定起点和方向，再听方位词：\nnorth of, opposite, adjacent to, next to, at the junction of, on the corner of"],
  ["s-c17", "方法", "L", "听力填空的拼写", "拼写和单复数必须对，大小写不影响得分。\n常拼错：accommodation, environment, government, necessary"],
  ["s-c18", "方法", "S", "Part 2 的结构", "1 分钟准备只写关键词。\n顺序：是什么 / 什么时候 / 在哪 → 2–3 个细节 → 你的感受或影响。\n说满 2 分钟，考官打断是正常的。"],
  ["s-c19", "方法", "W", "Task 2 字数和时间", "至少 250 词，不够会在 TR 扣分；目标 270–300。\n建议先写 Task 2（40 分钟），再写 Task 1（20 分钟）。"]
];
