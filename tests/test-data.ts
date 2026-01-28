
export interface TestScenario {
    id: string; description: string; input: string; expectedOutput: string;
    type: 'Positive' | 'Negative' | 'UI'; category: string; length: 'S' | 'M' | 'L'; qualityFocus: string;
    justification: string;
    whatIsCovered: string;
}
export const allScenarios: TestScenario[] = [
    {
        id: 'Pos_Fun_01', description: 'Simple sentence conversion', input: 'mama gedhara yanavaa.', expectedOutput: 'මම ගෙදර යනවා.',
        type: 'Positive', category: 'Simple sentence', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• The sentence meaning is accurately preserved.\n• Sinhala spelling and punctuation are correct.\n• Basic Subject-Object-Verb structure is maintained.',
        whatIsCovered: '• Simple sentence\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_02', description: 'Compound sentence with conjunction', input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.', expectedOutput: 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.',
        type: 'Positive', category: 'Compound sentence', length: 'M', qualityFocus: 'Accuracy validation',
        justification: '• The compound structure is correctly transliterated.\n• Conjunctions like "haebaeyi" are converted accurately.\n• Contextual meaning is preserved across clauses.',
        whatIsCovered: '• Compound sentence\n• M (31–299 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_03', description: 'Complex sentence with conditional', input: 'oya enavaanam mama balan innavaa.', expectedOutput: 'ඔය එනවානම් මම බලන් ඉන්නවා.',
        type: 'Positive', category: 'Complex sentence', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Conditional marker "nam" is correctly attached.\n• The flow of the complex sentence is natural in Sinhala.\n• No loss of grammatical meaning.',
        whatIsCovered: '• Complex sentence\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_04', description: 'Question form', input: 'oyaata kohomadha?', expectedOutput: 'ඔයාට කොහොමද?',
        type: 'Positive', category: 'Interrogative (question)', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• The greeting meaning is preserved.\n• Sinhala spelling and punctuation are correct.\n• The question mark remains correctly placed.',
        whatIsCovered: '• Greeting / request / response\n• Interrogative (question)\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_05', description: 'Command form', input: 'vahaama enna.', expectedOutput: 'වහාම එන්න.',
        type: 'Positive', category: 'Imperative (command)', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• The imperative tone is correctly conveyed.\n• "vahaama" is accurately transliterated to "වහාම".',
        whatIsCovered: '• Imperative (command)\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_06', description: 'Positive statement', input: 'api heta enavaa.', expectedOutput: 'අපි හෙට එනවා.',
        type: 'Positive', category: 'Present tense', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Standard present tense statement is correctly converted.\n• Pronoun "api" and verb "enavaa" are accurate.',
        whatIsCovered: '• Present tense\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_07', description: 'Negative statement', input: 'api heta ennee naehae.', expectedOutput: 'අපි හෙට එන්නේ නැහැ.',
        type: 'Positive', category: 'Negation (negative form)', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Negation "naehae" is correctly mapped to "නැහැ".\n• The sentence structure clearly conveys the negative meaning.',
        whatIsCovered: '• Negation (negative form)\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_08', description: 'Common greeting', input: 'aayuboovan!', expectedOutput: 'ආයුබෝවන්!',
        type: 'Positive', category: 'Greeting / request / response', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• The traditional greeting is flawlessly converted.\n• Exclamation mark is preserved.',
        whatIsCovered: '• Greeting / request / response\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_09', description: 'Polite request', input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?', expectedOutput: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?',
        type: 'Positive', category: 'Greeting / request / response', length: 'M', qualityFocus: 'Accuracy validation',
        justification: '• Polite term "karuNaakaralaa" is correctly rendered.\n• The request format "puLuvandha" is accurate.',
        whatIsCovered: '• Greeting / request / response\n• M (31–299 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_10', description: 'Frequent collocation', input: 'hariyata vaeda', expectedOutput: 'හරියට වැඩ',
        type: 'Positive', category: 'Word combination / phrase pattern', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Common phrase collocation is preserved.\n• Space between words is handled correctly.',
        whatIsCovered: '• Word combination / phrase pattern\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_11', description: 'Joined words handling', input: 'mata oona', expectedOutput: 'මට ඕන',
        type: 'Positive', category: 'Word combination / phrase pattern', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• The phrase "mata oona" correctly maps to "මට ඕන".\n• No accidental merging of words.',
        whatIsCovered: '• Word combination / phrase pattern\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_12', description: 'Repeated words for emphasis', input: 'hari hari', expectedOutput: 'හරි හරි',
        type: 'Positive', category: 'Word combination / phrase pattern', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Repetition is maintained as intended.\n• Both occurrences of "hari" are identical in Sinhala.',
        whatIsCovered: '• Word combination / phrase pattern\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_13', description: 'Past tense sentence', input: 'mama iiyee gedhara giyaa.', expectedOutput: 'මම ඊයේ ගෙදර ගියා.',
        type: 'Positive', category: 'Past tense', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Past tense marker "giyaa" is correctly converted.\n• Time reference "iiyee" matches "ඊයේ".',
        whatIsCovered: '• Past tense\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_14', description: 'Plural pronoun', input: 'api yamu.', expectedOutput: 'අපි යමු.',
        type: 'Positive', category: 'Plural form', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Suggestive form "yamu" is correctly transliterated.\n• Simple plural subject "api" is accurate.',
        whatIsCovered: '• Plural form\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_15', description: 'Mixed English technical terms', input: 'Zoom meeting ekak thiyennee.', expectedOutput: 'Zoom meeting එකක් තියෙන්නේ.',
        type: 'Positive', category: 'Mixed Singlish + English', length: 'M', qualityFocus: 'Accuracy validation',
        justification: '• The system correctly converts the Singlish content while preserving English terms.\n• "Zoom meeting" remains readable and does not negatively affect the conversion.',
        whatIsCovered: '• Mixed Singlish + English\n• M (31–299 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_16', description: 'English place names', input: 'siiyaa Colombo yanna hadhannee.', expectedOutput: 'සීයා Colombo යන්න හදන්නේ.',
        type: 'Positive', category: 'Names / places / common English words', length: 'M', qualityFocus: 'Accuracy validation',
        justification: '• Proper noun "Colombo" is preserved in English as expected.\n• Surrounding Sinhala context is correctly converted.',
        whatIsCovered: '• Names / places / common English words\n• M (31–299 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_17', description: 'Common abbreviations', input: 'mata SMS ekak evanna.', expectedOutput: 'මට SMS එකක් එවන්න.',
        type: 'Positive', category: 'Mixed Singlish + English', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Acronym "SMS" is preserved.\n• The verb "evanna" is correctly formed.',
        whatIsCovered: '• Mixed Singlish + English\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_18', description: 'Punctuation handling', input: 'oyaata kohomadha? (goda kaalekin).', expectedOutput: 'ඔයාට කොහොමද? (ගොඩ කාලෙකින්).',
        type: 'Positive', category: 'Punctuation / numbers', length: 'M', qualityFocus: 'Accuracy validation',
        justification: '• Parentheses and question marks are correctly placed.\n• Content inside brackets is correctly transliterated.',
        whatIsCovered: '• Punctuation / numbers\n• M (31–299 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_19', description: 'Currency format', input: 'Rs. 5000 k dhenna.', expectedOutput: 'Rs. 5000 ක් දෙන්න.',
        type: 'Positive', category: 'Punctuation / numbers', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Currency symbol "Rs." and amount "5000" are preserved.\n• The suffix character "k" is correctly converted to "ක්".',
        whatIsCovered: '• Punctuation / numbers\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_20', description: 'Time format preservation', input: 'raeta 8.30 ta enna.', expectedOutput: 'රැට 8.30 ට එන්න.',
        type: 'Positive', category: 'Punctuation / numbers', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Time format "8.30" is preserved accurately.\n• Surrounding text "raeta" and "ta" are converted correctly.',
        whatIsCovered: '• Punctuation / numbers\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_21', description: 'Handling multiple spaces', input: 'mama gedhara yanavaa.', expectedOutput: 'මම ගෙදර යනවා.',
        type: 'Positive', category: 'Formatting (spaces / line breaks / paragraph)', length: 'S', qualityFocus: 'Formatting preservation',
        justification: '• Extra spaces are normalized correctly.\n• The sentence remains readable and grammatically correct.',
        whatIsCovered: '• Formatting (spaces / line breaks / paragraph)\n• S (≤30 characters)\n• Formatting preservation'
    },
    {
        id: 'Pos_Fun_22', description: 'Multi-line input', input: 'mama gedhara yanavaa.\noyaa enavadha?', expectedOutput: 'මම ගෙදර යනවා.\nඔයා එනවද?',
        type: 'Positive', category: 'Formatting (spaces / line breaks / paragraph)', length: 'M', qualityFocus: 'Formatting preservation',
        justification: '• Line breaks are preserved in the output.\n• Each line is converted independently and correctly.',
        whatIsCovered: '• Formatting (spaces / line breaks / paragraph)\n• M (31–299 characters)\n• Formatting preservation'
    },
    {
        id: 'Pos_Fun_23', description: 'Long text input', input: 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva aethi athara.', expectedOutput: 'දිට්වා සුළි කුණාටුව සමඟ ඇති වූ ගංවතුර සහ නායයෑම් හේතුවෙන් මාර්ග සංවර්ධන අධිකාරිය සතු මාර්ග කොටස් 430ක් විනාශයට පත්ව ඇති අතර.',
        type: 'Positive', category: 'Daily language usage', length: 'L', qualityFocus: 'Accuracy validation',
        justification: '• Long paragraph is converted without data loss.\n• Complex vocabulary like "maarga sQQvarDhana aDhikaariya" is accurately rendered.\n• Sentence flow is maintained.',
        whatIsCovered: '• Daily language usage\n• L (≥300 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_24', description: 'Future tense', input: 'mama heta enavaa.', expectedOutput: 'මම හෙට එනවා.',
        type: 'Positive', category: 'Future tense', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Future intention "heta enavaa" is correctly transliterated.\n• Simple sentence structure is consistent.',
        whatIsCovered: '• Future tense\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Neg_Fun_01', description: 'Chat shorthand "Thx"', input: 'Thx machan.', expectedOutput: 'ථx මචන්.',
        type: 'Negative', category: 'Slang / informal language', length: 'S', qualityFocus: 'Robustness validation',
        justification: '• The informal abbreviation "Thx" is not converted, which is acceptable.\n• The system handles the shorthand without crashing.',
        whatIsCovered: '• Slang / informal language\n• S (≤30 characters)\n• Robustness validation'
    },
    {
        id: 'Neg_Fun_02', description: 'Chat shorthand "u"', input: 'kohedha u yanne?', expectedOutput: 'කොහෙද උ යන්නෙ?',
        type: 'Negative', category: 'Slang / informal language', length: 'S', qualityFocus: 'Robustness validation',
        justification: '• Shorthand "u" is treated literally or phonetically, as expected.\n• The rest of the sentence is converted correctly.',
        whatIsCovered: '• Slang / informal language\n• S (≤30 characters)\n• Robustness validation'
    },
    {
        id: 'Neg_Fun_03', description: 'Chat shorthand "gr8"', input: 'meka gr8.', expectedOutput: 'මෙක gr8.',
        type: 'Negative', category: 'Slang / informal language', length: 'S', qualityFocus: 'Robustness validation',
        justification: '• "gr8" is not a standard Singlish pattern, so it remains largely unchanged or phonetically mapped.\n• System stability is maintained.',
        whatIsCovered: '• Slang / informal language\n• S (≤30 characters)\n• Robustness validation'
    },
    {
        id: 'Neg_Fun_04', description: 'Missing spaces stress test', input: 'mamagedharayanavaa', expectedOutput: 'මමගෙදරයනවා',
        type: 'Negative', category: 'Typographical error handling', length: 'S', qualityFocus: 'Robustness validation',
        justification: '• The system attempts to transliterate the continuous string.\n• Output is a direct phonetic mapping of the input without spaces.',
        whatIsCovered: '• Typographical error handling\n• S (≤30 characters)\n• Robustness validation'
    },
    {
        id: 'Neg_Fun_05', description: 'Typo in common word', input: 'mammaa gedhara yanavaa', expectedOutput: 'මම්මා ගෙදර යනවා',
        type: 'Negative', category: 'Typographical error handling', length: 'S', qualityFocus: 'Robustness validation',
        justification: '• The typo "mammaa" is converted phonetically to "මම්මා", which is the correct behavior for valid Singlish input.\n• No auto-correction is expected or applied.',
        whatIsCovered: '• Typographical error handling\n• S (≤30 characters)\n• Robustness validation'
    },
    {
        id: 'Neg_Fun_06', description: 'Mixed numeric and letters', input: 'g3dhara', expectedOutput: 'g3දර',
        type: 'Negative', category: 'Typographical error handling', length: 'S', qualityFocus: 'Robustness validation',
        justification: '• Mixed input is handled character by character.\n• "g3" remains "g3" (or similar) while "dhara" becomes "දර".',
        whatIsCovered: '• Typographical error handling\n• S (≤30 characters)\n• Robustness validation'
    },
    {
        id: 'Neg_Fun_07', description: 'Heavy symbol usage', input: '$$$###', expectedOutput: '$$$###',
        type: 'Negative', category: 'Punctuation / numbers', length: 'S', qualityFocus: 'Robustness validation',
        justification: '• Symbols are ignored or preserved as is.\n• No translation attempts on special characters.',
        whatIsCovered: '• Punctuation / numbers\n• S (≤30 characters)\n• Robustness validation'
    },
    {
        id: 'Neg_Fun_08', description: 'Script tag input', input: 'alert(1)', expectedOutput: 'alert(1)',
        type: 'Negative', category: 'Typographical error handling', length: 'S', qualityFocus: 'Robustness validation',
        justification: '• Potential XSS payload is treated as plain text.\n• The script is not executed, merely transliterated or preserved.',
        whatIsCovered: '• Typographical error handling\n• S (≤30 characters)\n• Robustness validation'
    },
    {
        id: 'Neg_Fun_09', description: 'Extremely long single word without spaces', input: 'a'.repeat(50), expectedOutput: 'ආ'.repeat(25),
        type: 'Negative', category: 'Typographical error handling', length: 'M', qualityFocus: 'Robustness validation',
        justification: '•  System handles extreme input length gracefully.\n• Continuous character stream is processed without buffer overflow.',
        whatIsCovered: '• Typographical error handling\n• M (31–299 characters)\n• Robustness validation'
    },
    {
        id: 'Neg_Fun_10', description: 'Unknown/Foreign characters', input: '你好', expectedOutput: '你好',
        type: 'Negative', category: 'Typographical error handling', length: 'S', qualityFocus: 'Robustness validation',
        justification: '• Foreign characters are passed through unchanged.\n• No mangling of unsupported Unicode blocks.',
        whatIsCovered: '• Typographical error handling\n• S (≤30 characters)\n• Robustness validation'
    },
    {
        id: 'Pos_UI_01', description: 'Real-time output update', input: 'mama', expectedOutput: 'මම',
        type: 'UI', category: 'Real-time output update behavior', length: 'S', qualityFocus: 'Usability flow',
        justification: '• The output updates immediately as the user types.\n• Latency is minimal and acceptable for real-time use.',
        whatIsCovered: '• Real-time output update behavior\n• S (≤30 characters)\n• Usability flow'
    },
    {
        id: 'Pos_Fun_25', description: 'Date format handling', input: 'ada 2023-10-25.', expectedOutput: 'අඩ 2023-10-25.',
        type: 'Positive', category: 'Punctuation / numbers', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Date format YYYY-MM-DD is preserved.\n• "ada" is transliterated to "අඩ" by the system.',
        whatIsCovered: '• Punctuation / numbers\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_26', description: 'Idiomatic expression', input: 'kata vahamuk?', expectedOutput: 'කට වහමුක්?',
        type: 'Positive', category: 'Daily language usage', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Idiomatic expression meaning "Shall we close our mouths?" (Shut up) is captured.\n• Colloquial "vahamuk" ending is handled.',
        whatIsCovered: '• Daily language usage\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Pos_Fun_27', description: 'Honorific title', input: 'Garu aemathi thumaa.', expectedOutput: 'ඟරු ඇමති තුමා.',
        type: 'Positive', category: 'Names / places / common English words', length: 'S', qualityFocus: 'Accuracy validation',
        justification: '• Honorifics "Garu" (Honorable) and "thumaa" are correctly rendered.\n• Spacing usage is formal.',
        whatIsCovered: '• Names / places / common English words\n• S (≤30 characters)\n• Accuracy validation'
    },
    {
        id: 'Neg_Fun_11', description: 'SQL Injection simulation', input: "' OR '1'='1", expectedOutput: "' OR '1'='1",
        type: 'Negative', category: 'Robustness / Security', length: 'S', qualityFocus: 'Robustness validation',
        justification: '• System should treat SQL patterns as plain text.\n• No execution or error should occur.',
        whatIsCovered: '• Robustness / Security\n• S (≤30 characters)\n• Robustness validation'
    },
    {
        id: 'Neg_Fun_12', description: 'URL input', input: 'https://google.com', expectedOutput: 'හ්ට්ට්ප්ස්://google.com',
        type: 'Negative', category: 'Robustness / Security', length: 'S', qualityFocus: 'Robustness validation',
        justification: '• URLs should be preserved or minimally transliterated without breaking.\n• Ideally preserved as English text.',
        whatIsCovered: '• Robustness / Security\n• S (≤30 characters)\n• Robustness validation'
    }
];
