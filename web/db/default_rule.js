"use strict";

const ruleList = [
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "['c', 'ɟ', 'ç', 'ʝ', 'ɲ', 'k', 'g', 'x', 'ɣ', 'ŋ']",
			ruleType: "Alternating",
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ x ɣ m n ŋ l w j i e ɔ o æ ɑ",
			ruleTxt: "palatalization of velars after high front vowels",
			gloss: ['\'bounce\'', '\'wheat\'', '\'mosquito\'', '\'awaken\'', '\'two\'', '\'coastline\'', '\'rain\'', '\'lose\'', '\'we (incl)\'', '\'bring\'', '\'you (dual)\'', '\'what\'', '\'ketchup\'', '\'sun\'', '\'build\'', '\'lake\'', '\'west\'', '\'fight\'', '\'destroy\'', '\'thumb\'', '\'kneel\'', '\'few\'', '\'then\'', '\'black\'', '\'pretend\'', '\'food\'', '\'apple\'', '\'onion\'', '\'horn\'', '\'soybean\''],
			SR: ['diɲxɑ', 'ʃiɟe', 'ɣiçseɣ', 'ŋoʒziç', 'kicɑθ', 'ŋictog', 'xiɲʔo', 'lɔmiɟ', 'kiɲd͡ʒɑt͡ʃ', 'ʔicʃɑ', 'giʝneɣ', 'kɔfxiʝ', 'ʃiçɔ', 'liɲvoŋ', 'θiɲ', 'koxoʒ', 'ʒiʒŋi', 'zid͡ʒŋe', 'ɣɔɣjɔz', 'gæŋjɔ', 'ɣot͡ʃxæ', 'xoɣɣɔ', 'ɣækʔil', 'ʒogʒi', 'ðex', 'ŋɔp', 'ŋe', 'jældeʒ', 'ʔɑnmæ', 'pesin'],
			UR: ['diŋxɑ', 'ʃige', 'ɣixseɣ', 'ŋoʒzix', 'kikɑθ', 'ŋiktog', 'xiŋʔo', 'lɔmig', 'kiŋd͡ʒɑt͡ʃ', 'ʔikʃɑ', 'giɣneɣ', 'kɔfxiɣ', 'ʃixɔ', 'liŋvoŋ', 'θiŋ', 'koxoʒ', 'ʒiʒŋi', 'zid͡ʒŋe', 'ɣɔɣjɔz', 'gæŋjɔ', 'ɣot͡ʃxæ', 'xoɣɣɔ', 'ɣækʔil', 'ʒogʒi', 'ðex', 'ŋɔp', 'ŋe', 'jældeʒ', 'ʔɑnmæ', 'pesin']
		}, {
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "['c', 'ɟ', 'ç', 'ʝ', 'k', 'ɡ', 'x', 'ɣ']",
			ruleType: "Alternating",
			phoneme: "p b t d k ɡ ʔ t͡ʃ d͡ʒ f v θ ð s z h x ɣ m n r l j i ɔ o u a",
			ruleTxt: "palatalization of velars after front vowels",
			gloss: ['\'inland\'', '\'mud\'', '\'evil\'', '\'brown\'', '\'fox\'', '\'face\'', '\'avoid\'', '\'corn\'', '\'threaten\'', '\'think\'', '\'almond\'', '\'honey\'', '\'choose\'', '\'sit\'', '\'baby\'', '\'full\'', '\'parent\'', '\'regret\'', '\'night\'', '\'shark\'', '\'drink\'', '\'tongue\'', '\'laugh\'', '\'that\'', '\'island\'', '\'repeat\'', '\'owl\'', '\'rabbit\'', '\'put\'', '\'hair\''],
			SR: ['miɟɡɔʔ', 'jici', 'niʝɡɔl', 'dihhiç', 't͡ʃiɟdu', 'jiɟu', 'xicu', 'ziʝ', 't͡ʃiʝjɔ', 'ɣiçso', 'ɣafiç', 'θicxi', 'xiçko', 'ɡɔdiç', 'xiçxɔ', 'fɔɡɔ', 'kɔsu', 'xub', 'dufxif', 'xɔ', 'pulɣa', 'ɣirkoj', 'ɡat͡ʃxap', 'ɡu', 'ɣɔxu', 'ɡij', 'ɣɔxaɡ', 'dolha', 'd͡ʒuθud͡ʒ', 'laðzaj'],
			UR: ['miɡɡɔʔ', 'jiki', 'niɣɡɔl', 'dihhix', 't͡ʃiɡdu', 'jiɡu', 'xiku', 'ziɣ', 't͡ʃiɣjɔ', 'ɣixso', 'ɣafix', 'θikxi', 'xixko', 'ɡɔdix', 'xixxɔ', 'fɔɡɔ', 'kɔsu', 'xub', 'dufxif', 'xɔ', 'pulɣa', 'ɣirkoj', 'ɡat͡ʃxap', 'ɡu', 'ɣɔxu', 'ɡij', 'ɣɔxaɡ', 'dolha', 'd͡ʒuθud͡ʒ', 'laðzaj']
		}, {
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "p b f v t d θ ð s z ʃ ʒ t͡ʃ d͡ʒ k g x ɣ",
			ruleType: "Neutralizing",
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h x ɣ m n ŋ r i e u a",
			ruleTxt: "word-final obstruent devoicing",
			UR: ['veɡ', 'but͡ʃaz', 'θeɡeb', 'ðaɣ', 'vadʒaz', 'ðersuz', 'ðev', 'ŋixsuɣ', 'memɡib', 'farxid', 'sirʔid͡ʒ', 'buʃʃed͡ʒ', 'xaɡ', 'vimxeɣ', 'sisθiɡ', 'ziz', 'viʒ', 'dumzaɡ', 'ɣad', 'ɡuɣðad͡ʒ', 'diðiθ', 'zaʔsa', 'ŋandi', 'ved͡ʒd͡ʒif', 'ʒurbe', 'daxθe', 'zifʃa', 'taɡder', 'ɡiʃe', 'tibzi', 'zaŋɣu', 'zahi', 'd͡ʒabmi', 'kiðd͡ʒak', 'ðaxu', 'daʒe', 'sirt͡ʃa', 't͡ʃeʃu', 't͡ʃetʔeʔ', 'θu'],
			SR: ['vek', 'but͡ʃas', 'θeɡep', 'ðax', 'vadʒas', 'ðersus', 'ðef', 'ŋixsux', 'memɡip', 'farxit', 'sirʔit͡ʃ', 'buʃʃet͡ʃ', 'xak', 'vimxex', 'sisθik', 'zis', 'viʃ', 'dumzak', 'ɣat', 'ɡuɣðat͡ʃ', 'diðiθ', 'zaʔsa', 'ŋandi', 'ved͡ʒd͡ʒif', 'ʒurbe', 'daxθe', 'zifʃa', 'taɡder', 'ɡiʃe', 'tibzi', 'zaŋɣu', 'zahi', 'd͡ʒabmi', 'kiðd͡ʒak', 'ðaxu', 'daʒe', 'sirt͡ʃa', 't͡ʃeʃu', 't͡ʃetʔeʔ', 'θu'],
			gloss: ['broken', 'bright', 'bean', 'snake', 'north', 'throat', 'three', 'recline', 'liquid', 'I', 'storm', 'what', 'crawl', 'carrot', 'thin', 'seed', 'son', 'kill', 'tiger', 'know', 'yellow', 'adore', 'need', 'coyote', 'feel', 'night', 'leave', 'you (pl)', 'nostril', 'sell', 'digest', 'blue/green', 'eyelid', 'cold', 'get', 'young', 'he', 'sand', 'brown', 'few']
		}, {
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "p b f v m m̥ t d θ ð s z ʃ ʒ n n̥ t͡ʃ d͡ʒ k g x ɣ ŋ ŋ̥ r l r̥ l̥ j w j̥ ʍ",
			ruleType: "Mixed",
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h x ɣ m n ŋ r l w j i e u a",
			ruleTxt: "word-final stop devoicing",
			gloss: ['brown', 'four', 'torso', 'blackberry', 'sister', 'stream', 'ear', 'hear', 'coastline', 'flame', 'food', 'tree', 'grow', 'west', 'buy', 'these', 'tomato', 'apple', 'tiger', 'wrist', 'camel', 'learn', 'dry', 'child', 'mouth', 'good', 'man', 'sparrow', 'husband', 'name', 'depend on', 'black', 'fruit bat', 'sleep', 'run', 'turtle', 'heavy', 'sit', 'eye', 'ignore'],
			SR: ['zuhʔuk', 'ɡut͡ʃθaʃ', 'dat͡ʃxuŋ̥', 'd͡ʒiθ', 'niʒvaj̥', 'bunkut', 'ɣudeθ', 'ðet͡ʃ', 'd͡ʒizvep', 'zuʃhek', 'meʒðum̥', 'ŋarhun̥', 'jiɡel̥', 'xabeθ', 'jappuf', 'nehax', 'talɡaθ', 'ʔiddaŋ̥', 'ðut͡ʃ', 'juxʔeʃ', 'θud͡ʒu', 'wuzwi', 'saŋt͡ʃaf', 'ʃabŋaθ', 'dalɡe', 'laldi', 'ɣiθti', 'naɣu', 'ðassi', 'jaðʒu', 'ðammiʃ', 'ðeŋzi', 'ŋapʔi', 'ɣeʃθa', 'relda', 'ɣup', 'ʔet͡ʃap', 'ki', 'tipi', 'tifeh'],
			UR: ['zuhʔuɡ', 'ɡut͡ʃθaʒ', 'dat͡ʃxuŋ', 'd͡ʒið', 'niʒvaj', 'bunkud', 'ɣudeð', 'ðed͡ʒ', 'd͡ʒizveb', 'zuʃheɡ', 'meʒðum', 'ŋarhun', 'jiɡel', 'xabeð', 'jappuv', 'nehaɣ', 'talɡað', 'ʔiddaŋ', 'ðud͡ʒ', 'juxʔeʒ', 'θud͡ʒu', 'wuzwi', 'saŋt͡ʃaf', 'ʃabŋaθ', 'dalɡe', 'laldi', 'ɣiθti', 'naɣu', 'ðassi', 'jaðʒu', 'ðammiʃ', 'ðeŋzi', 'ŋapʔi', 'ɣeʃθa', 'relda', 'ɣup', 'ʔet͡ʃap', 'ki', 'tipi', 'tifeh']
		}, {
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "p b f v t d θ ð s z ʃ ʒ t͡ʃ d͡ʒ k g x ɣ ʔ",
			ruleType: "Neutralizing",
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h x ɣ m n ŋ r l w j i ɪ e ɛ ɔ o ʊ u a",
			ruleTxt: "intervocalic obstruent voicing",
			UR: ['t͡ʃaθa', 'sɔxa', 'rɪʃɛʔ', 'koθo', 'ŋɔka', 't͡ʃɛkub', 'taθa', 'pɔʃe', 't͡ʃɪkɪʔ', 'roto', 'wɛt͡ʃɔw', 'mɔt͡ʃar', 'jɛxi', 't͡ʃaθɪ', 'tipu', 'ðafʊ', 'ʃoʔoɡ', 'd͡ʒeʔe', 'fɪʔi', 'sʊʔo', 'ðɪhfet', 'noluθ', 'bʊŋfɔt', 'pɔs', 'ðɔdwɪt͡ʃ', 'rɛŋet', 'wɪtfad', 'hɔðɡɪp', 't͡ʃʊʒva', 'ʔat͡ʃpɪ', 't͡ʃɛd', 'θɛɣo', 'koɡwu', 'ʔʊlvav', 'ʒʊŋt͡ʃɛʒ', 'θɪnɔ', 'rinvu', 'huhhe', 'nolɡa', 'wahhuz'],
			SR: ['t͡ʃaða', 'sɔɣa', 'rɪʒɛʔ', 'koðo', 'ŋɔɡa', 't͡ʃɛɡub', 'taða', 'pɔʒe', 't͡ʃɪɡɪʔ', 'rodo', 'wɛd͡ʒɔw', 'mɔd͡ʒar', 'jɛɣi', 't͡ʃaðɪ', 'tibu', 'ðavʊ', 'ʃoʔoɡ', 'd͡ʒeʔe', 'fɪʔi', 'sʊʔo', 'ðɪhfet', 'noluθ', 'bʊŋfɔt', 'pɔs', 'ðɔdwɪt͡ʃ', 'rɛŋet', 'wɪtfad', 'hɔðɡɪp', 't͡ʃʊʒva', 'ʔat͡ʃpɪ', 't͡ʃɛd', 'θɛɣo', 'koɡwu', 'ʔʊlvav', 'ʒʊŋt͡ʃɛʒ', 'θɪnɔ', 'rinvu', 'huhhe', 'nolɡa', 'wahhuz'],
			gloss: ['sneeze', 'lake', 'four', 'hyena', 'husband', 'beaver', 'these', 'fox', 'inland', 'you (pl)', 'come', 'nostril', 'neck', 'hill', 'bake', 'food', 'cashew', 'blue', 'it', 'hot', 'oats', 'surprise', 'face', 'which', 'not', 'worm', 'every', 'brother', 'falafel', 'cantaloupe', 'tail', 'goose', 'trade', 'lip', 'forest', 'broken', 'kneel', 'they (dual)', 'lemon', 'finish']
		}, {
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "e ɛ o ɔ",
			ruleType: "Neutralizing",
			phoneme: "p t k g ʔ t͡ʃ f θ s ʃ x m n ŋ l i ɪ e ɛ ɔ o ʊ u a",
			ruleTxt: "mid vowel laxing in closed syllables",
			UR: ['nɔst͡ʃek', 'ʃɪkxes', 'xepxok', 'ŋɔŋlox', 'noxex', 'θoɡ', 'lox', 't͡ʃeʔoŋ', 'tox', 'seffem', 'xemko', 'ʔeɡlit͡ʃ', 'nolt͡ʃɔ', 'xexsɛn', 'tolʃʊ', 'xeɡnix', 'mextu', 'ŋoɡlo', 'ʔeθxo', 'neɡme', 'ŋeŋɡɔ', 'ɡeŋŋɛk', 'neθfuf', 'pe', 'noɡno', 'sulʃe', 'θixse', 'kolʃi', 'to', 'ŋʊlxe', 'tiɡme', 'θofo', 'ʔeʃo', 'loʃe', 't͡ʃɪnŋo', 'ŋet͡ʃiθ', 'ʔutθu', 'fɛɡŋɛ', 'mʊɡmɔ', 'ʔʊmt͡ʃɪθ'],
			SR: ['nɔst͡ʃɛk', 'ʃɪkxɛs', 'xɛpxɔk', 'ŋɔŋlɔx', 'noxɛx', 'θɔɡ', 'lɔx', 't͡ʃeʔɔŋ', 'tɔx', 'sɛffɛm', 'xɛmko', 'ʔɛɡlit͡ʃ', 'nɔlt͡ʃɔ', 'xɛxsɛn', 'tɔlʃʊ', 'xɛɡnix', 'mɛxtu', 'ŋɔɡlo', 'ʔɛθxo', 'nɛɡme', 'ŋɛŋɡɔ', 'ɡɛŋŋɛk', 'nɛθfuf', 'pe', 'nɔɡno', 'sulʃe', 'θixse', 'kɔlʃi', 'to', 'ŋʊlxe', 'tiɡme', 'θofo', 'ʔeʃo', 'loʃe', 't͡ʃɪnŋo', 'ŋet͡ʃiθ', 'ʔutθu', 'fɛɡŋɛ', 'mʊɡmɔ', 'ʔʊmt͡ʃɪθ'],
			gloss: ['adapt', 'tomato', 'go', 'father', 'expect', 'begin', 'broken', 'dance', 'wheat', 'old', 'melon', 'who', 'pond', 'storm', 'son', 'grey', 'red', 'cream', 'one', 'hear', 'pea', 'work', 'bright', 'cod', 'almond', 'burn', 'man', 'direction', 'evening', 'neck', 'find', 'lion', 'mud', 'fire', 'grapefruit', 'you (pl)', 'pay', 'blood', 'sibling', 'turtle']
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "s z k g",
			ruleType: "Mixed",
			phoneme: "p b t d k g ʔ f θ s h x n r l w j i e ɛ ɔ o u ə a",
			ruleTxt: "palatal mutation of velar stops to alveolar fricatives before front vowels",
			UR: ['rərkeɡ', 'kefi', 'ki', 'ɡeʔpib', 'lɔɡiʔ', 'ɡerkɔk', 'kibjoh', 'kuhker', 'sinkɛf', 'ɡi', 'kɛɡru', 'ɡiɡnu', 'kokek', 'kini', 'ɡiblik', 'kɛk', 'ɡɛnθɛ', 'kɛɡrɛ', 'ɡeɡ', 'ɡərɡek', 'ɡa', 'xuɡɔk', 'ɡɔɡbɛ', 'buphɛk', 'tirsuɡ', 'ɡəj', 'rakku', 'ʔɔbɡɔθ', 'ɡusteθ', 'hoktə', 'ɡoɡɔk', 'θiɡbeʔ', 'pɔpiɡ', 'xɛɡ', 'θikha', 'xɛɡnik', 'babjew', 'nobnul', 'tən', 'xɔpheh'],
			SR: ['rərseɡ', 'sefi', 'si', 'zeʔpib', 'lɔziʔ', 'zerkɔk', 'sibjoh', 'kuhser', 'sinsɛf', 'zi', 'sɛɡru', 'ziɡnu', 'kosek', 'sini', 'ziblik', 'sɛk', 'zɛnθɛ', 'sɛɡrɛ', 'zeɡ', 'ɡərzek', 'ɡa', 'xuɡɔk', 'ɡɔɡbɛ', 'buphɛk', 'tirsuɡ', 'ɡəj', 'rakku', 'ʔɔbɡɔθ', 'ɡusteθ', 'hoktə', 'ɡoɡɔk', 'θiɡbeʔ', 'pɔpiɡ', 'xɛɡ', 'θikha', 'xɛɡnik', 'babjew', 'nobnul', 'tən', 'xɔpheh'],
			gloss: ['evening', 'write', 'lizard', 'rabbit', 'hummus', 'thin', 'name', 'no', 'snow', 'carrot', 'zucchini', 'there', 'kneel', 'fox', 'eyelash', 'path', 'goose', 'buttocks', 'you (sg)', 'murky', 'jump', 'chin', 'feed', 'three', 'realize', 'ash', 'wet', 'prevent', 'discover', 'leave', 'point', 'river', 'sun', 'bumpy', 'friend', 'wood', 'ox', 'feather', 'blackberry', 'man']
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "t d t͡s d͡z",
			ruleType: "Alternating",
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ m n ŋ r l w j i u a",
			ruleTxt: "palatal mutation of alveolar stops to alveolar affricates before front vowels",
			UR: ['dumtil', 'tiʃʃu', 'dinut', 'dittak', 'difti', 'dinlut', 'ʃuðdid', 'tid', 'paŋdin', 'diʔʃa', 'dutti', 'tiʃu', 'midi', 'daθti', 'tiŋŋa', 'tikti', 'ɡurdi', 'didŋun', 'tinʃut', 'tudi', 'duŋa', 'taʔθuð', 'vitpaɡ', 'ɡuʒvut', 'dupθul', 'ʃidva', 'zad', 'muntaʔ', 'dud', 'turʃa', 'tuda', 'ʒipʃud', 'tulŋuʔ', 'numtu', 'patad', 'jata', 'θuj', 'nubmaʒ', 'θumʒiʔ', 'ʔurfa'],
			SR: ['dumt͡sil', 't͡siʃʃu', 'd͡zinut', 'd͡zittak', 'd͡zift͡si', 'd͡zinlut', 'ʃuðd͡zid', 't͡sid', 'paŋd͡zin', 'd͡ziʔʃa', 'dutt͡si', 't͡siʃu', 'mid͡zi', 'daθt͡si', 't͡siŋŋa', 't͡sikt͡si', 'ɡurd͡zi', 'd͡zidŋun', 't͡sinʃut', 'tud͡zi', 'duŋa', 'taʔθuð', 'vitpaɡ', 'ɡuʒvut', 'dupθul', 'ʃidva', 'zad', 'muntaʔ', 'dud', 'turʃa', 'tuda', 'ʒipʃud', 'tulŋuʔ', 'numtu', 'patad', 'jata', 'θuj', 'nubmaʒ', 'θumʒiʔ', 'ʔurfa'],
			gloss: ['cinnamon', 'work', 'say', 'moss', 'eye', 'thumb', 'there', 'horn', 'like', 'chicken', 'trade', 'new', 'lizard', 'fog', 'enter', 'two', 'tooth', 'one', 'mountain', 'receive', 'smooth', 'jump', 'morning', 'die', 'wet', 'lunch', 'bright', 'stand', 'grapefruit', 'adjust', 'none', 'chest', 'cow', 'ice', 'all', 'cook', 'rice', 'claw', 'they (fem)', 'skin']
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "ʃ ʒ k g",
			ruleType: "Mixed",
			phoneme: "p t k g ʔ f θ s ʃ h m n ŋ l w i ɪ e ɛ ɔ ʊ u a",
			ruleTxt: "palatal mutation of velar stops to postalveolar fricatives before high front vowels",
			UR: ['kaɡɡif', 'ɡʊki', 'ɡɛɡik', 'kɪ', 'ʃeɡɪ', 'ŋapki', 'ɡikkɪ', 'ŋɔɡɡih', 'fulkɪ', 'ɡʊɡiʃ', 'likkiɡ', 'ɡilnaʔ', 'kilhɔ', 'kɪlku', 'ɡɪɡat', 'kɪl', 'paɡɡi', 'kɪɡiŋ', 'wɛɡɡɪk', 'ɡeɡɡɪɡ', 'kahkɛ', 'mʊneɡ', 'ɡʊŋʔɪ', 'ŋɪlɡaw', 'piʔkan', 'kʊɡluf', 'kuŋ', 'lɔlɡeŋ', 'tehku', 'ʔɔtkɔp', 'kuʃku', 'kes', 'ʃapkɛ', 'ʃiɡɡɛ', 'kamuw', 'kɔmɡʊ', 'suseθ', 'tʊntuf', 'nɪtθi', 'nesheʃ'],
			SR: ['kaɡʒif', 'ɡʊʃi', 'ɡɛʒik', 'ʃɪ', 'ʃeʒɪ', 'ŋapʃi', 'ʒikʃɪ', 'ŋɔɡʒih', 'fulʃɪ', 'ɡʊʒiʃ', 'likʃiɡ', 'ʒilnaʔ', 'ʃilhɔ', 'ʃɪlku', 'ʒɪɡat', 'ʃɪl', 'paɡʒi', 'ʃɪʒiŋ', 'wɛɡʒɪk', 'ɡeɡʒɪɡ', 'kahkɛ', 'mʊneɡ', 'ɡʊŋʔɪ', 'ŋɪlɡaw', 'piʔkan', 'kʊɡluf', 'kuŋ', 'lɔlɡeŋ', 'tehku', 'ʔɔtkɔp', 'kuʃku', 'kes', 'ʃapkɛ', 'ʃiɡɡɛ', 'kamuw', 'kɔmɡʊ', 'suseθ', 'tʊntuf', 'nɪtθi', 'nesheʃ'],
			gloss: ['dolphin', 'egg', 'pay', 'fruit bat', 'point', 'strawberry', 'heart', 'find', 'lemon', 'jump', 'llama', 'rice', 'we', 'one', 'nose', 'breathe', 'south', 'uncle', 'hot', 'flea', 'frog', 'ten', 'mouth', 'moon', 'bad', 'torso', 'young', 'every', 'cucumber', 'valley', 'much', 'it', 'sauce', 'possess', 'ice', 'sit', 'talk', 'not', 'what', 'wet']

		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "c ɟ ç ʝ ɲ k g x ɣ ŋ",
			ruleType: "Alternating",
			phoneme: "p b t d k g f v θ ð s z ʃ ʒ x ɣ m n ŋ r l w i e ɛ ɔ o ə a",
			ruleTxt: "palatalization of velars after front vowels",
			UR: ['ʃaŋix', 'kiŋɔ', 'ɣeɣɡox', 'ɡɛŋni', 'ŋeŋək', 'ɡɛɡvɔ', 'xexiʃ', 'ɡiɣðɔɡ', 'kixfe', 'wiɣzix', 'xomɡek', 'miɣrin', 'ɡɛŋɣo', 'təɣɛŋ', 'zekxi', 'kəɣɛk', 'xiŋʃop', 'ŋiɣɣa', 'kɛɡɡo', 'ŋeʒbeɣ', 'ŋəffak', 'kɔɣbə', 'sarɡe', 'soðɣol', 'ɡanɡə', 'kittam', 'ŋedbi', 'ɣa', 'tɔŋɔr', 'toɣraŋ', 'wəmkis', 'ɣaxxe', 'xɛʒðɔθ', 'ɣaŋ', 'ɣɛvda', 'ŋɛ', 'ʒizləw', 're', 'ðɔʃθɛl', 'fivla'],
			SR: ['ʃaŋiç', 'kiɲɔ', 'ɣeʝɡox', 'ɡɛɲni', 'ŋeɲək', 'ɡɛɟvɔ', 'xeçiʃ', 'ɡiʝðɔɡ', 'kiçfe', 'wiʝziç', 'xomɡec', 'miʝrin', 'ɡɛɲɣo', 'təɣɛɲ', 'zecxi', 'kəɣɛc', 'xiɲʃop', 'ŋiʝɣa', 'kɛɟɡo', 'ŋeʒbeʝ', 'ŋəffak', 'kɔɣbə', 'sarɡe', 'soðɣol', 'ɡanɡə', 'kittam', 'ŋedbi', 'ɣa', 'tɔŋɔr', 'toɣraŋ', 'wəmkis', 'ɣaxxe', 'xɛʒðɔθ', 'ɣaŋ', 'ɣɛvda', 'ŋɛ', 'ʒizləw', 're', 'ðɔʃθɛl', 'fivla'],
			gloss: ['eyelash', 'desire', 'fog', 'murky', 'earth', 'path', 'finger', 'duck', 'find', 'we (incl)', 'broken', 'look', 'taste', 'nostril', 'insect', 'empty', 'every', 'who', 'crawl', 'pond', 'change', 'sell', 'night', 'grapefruit', 'blueberry', 'flat', 'lion', 'turtle', 'mouth', 'chin', 'bone', 'call', 'dinner', 'wet', 'fire', 'cod', 'hair', 'group', 'celery', 'tree']

		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "i ɪ e ɛ a o ɔ u ʊ ĩ ɪ̃ ẽ ɛ̃ ã õ ɔ̃ ũ ʊ̃",
			ruleType: "Alternating",
			phoneme: "p b t d k g ʔ f θ s h m n ŋ r l w i ɪ e ɛ ɔ o ʊ u a",
			ruleTxt: "progressive vowel nasalization",
			UR: ['lɪdmuf', 'mopsɛ', 'lolmiɡ', 'wabŋɛ', 'nasse', 'ŋɪɡbuh', 'ŋelʊf', 'nadŋer', 'dibmɪʔ', 'mʊpfɛd', 'nɔfu', 'ŋɛptɔd', 'sɔdŋep', 'ŋɛθi', 'koŋe', 'penas', 'maɡʊ', 'mɛlah', 'koɡnɔr', 'nere', 'kɛdnɛ', 'nepsuf', 'ŋuŋɪŋ', 'sɛmɛd', 'ʔɔwom', 'dɛboɡ', 'leson', 'kar', 'θɛfpɪr', 'sʊhtɛ', 'tʊŋθɪw', 'ʔi', 'dɔhʔɪn', 'roɡlɪw', 'powa', 'haθfʊ', 'θɔki', 'fɪrdɛ', 'repθat', 'belkɪ'],
			SR: ['lɪdmũf', 'mõpsɛ', 'lolmĩɡ', 'wabŋɛ̃', 'nãsse', 'ŋɪ̃ɡbuh', 'ŋẽlʊf', 'nãdŋẽr', 'dibmɪ̃ʔ', 'mʊ̃pfɛd', 'nɔ̃fu', 'ŋɛ̃ptɔd', 'sɔdŋẽp', 'ŋɛ̃θi', 'koŋẽ', 'penãs', 'mãɡʊ', 'mɛ̃lah', 'koɡnɔ̃r', 'nẽre', 'kɛdnɛ̃', 'nẽpsuf', 'ŋũŋɪ̃ŋ', 'sɛmɛ̃d', 'ʔɔwom', 'dɛboɡ', 'leson', 'kar', 'θɛfpɪr', 'sʊhtɛ', 'tʊŋθɪw', 'ʔi', 'dɔhʔɪn', 'roɡlɪw', 'powa', 'haθfʊ', 'θɔki', 'fɪrdɛ', 'repθat', 'belkɪ'],
			gloss: ['mouse', 'ear', 'man', 'blackberry', 'new', 'sleep', 'bad', 'five', 'rain', 'leave', 'coastline', 'chickpea', 'this', 'we (excl)', 'name', 'rhinoceros', 'think', 'green', 'damp', 'parrot', 'sister', 'change', 'ash', 'white', 'where', 'cinnamon', 'moon', 'onion', 'listen', 'lizard', 'walnut', 'lunch', 'pear', 'succeed', 'spouse', 'eyelash', 'son', 'coyote', 'make', 'carry']

		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "i ɪ e ɛ o ɔ u ʊ ə",
			ruleType: "Neutralizing",
			phoneme: "p b t d k g f θ s ʃ h x m n r l w j i ɪ e ɛ ɔ o ʊ u ə æ ɑ",
			ruleTxt: "word-final raising of mid vowels",
			UR: ['kɔmdɛ', 'pɛnɛ', 'po', 'hɛ', 'jo', 'tɛrno', 'ɡəpɛ', 'jortɛ', 'mɑbɡe', 'θekɔ', 'kɔxʃɔ', 'fɛɡbo', 'ləmbɛ', 'θɔ', 'kɛ', 'kɪθpɛ', 'fəpfə', 'fədlə', 'nɑrmə', 'bemhə', 'wikkəʃ', 'θɔmʃɛk', 'seb', 'xət', 'ʃæbed', 'məɡ', 'sɔl', 'hɛtkɪx', 'lɑbeθ', 'jɑnɛp', 'doʃpox', 'lebjəl', 'tənxɛθ', 'jədnɑ', 'ʃɛrjɛʃ', 'bɛbjʊd', 'kudmɑ', 'tunʃu', 'piʃ', 'hɪwɪ'],
			SR: ['kɔmdɪ', 'pɛnɪ', 'pu', 'hɪ', 'ju', 'tɛrnu', 'ɡəpɪ', 'jortɪ', 'mɑbɡi', 'θekʊ', 'kɔxʃʊ', 'fɛɡbu', 'ləmbɪ', 'θʊ', 'kɪ', 'kɪθpɪ', 'fəpfə', 'fədlə', 'nɑrmə', 'bemhə', 'wikkəʃ', 'θɔmʃɛk', 'seb', 'xət', 'ʃæbed', 'məɡ', 'sɔl', 'hɛtkɪx', 'lɑbeθ', 'jɑnɛp', 'doʃpox', 'lebjəl', 'tənxɛθ', 'jədnɑ', 'ʃɛrjɛʃ', 'bɛbjʊd', 'kudmɑ', 'tunʃu', 'piʃ', 'hɪwɪ'],
			gloss: ['tribe', 'claw', 'we (incl)', 'elbow', 'alligator', 'young', 'child', 'ant', 'bake', 'speak', 'alcohol', 'eat', 'continue', 'warm', 'nephew', 'tongue', 'red', 'hesitate', 'nostril', 'trade', 'cloud', 'kill', 'brother', 'adapt', 'flame', 'small', 'no', 'beach', 'father', 'night', 'blue', 'ketchup', 'that', 'dove', 'every', 'kneel', 'need', 'think', 'grey', 'pepper']

		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "t̪ d̪ t d",
			ruleType: "Alternating",
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v s z ʃ ʒ h m n ŋ l w j i e u ə a",
			ruleTxt: "dentalization of alveolar stops before front vowels",
			UR: ['t͡ʃuŋdi', 'batti', 'vəddi', 'detam', 'telju', 'wiɡde', 'bedit', 'nəzdiŋ', 'deŋʒij', 'tedaz', 'titha', 'deznaw', 'demteɡ', 'midi', 'diki', 'madi', 'timted', 'ti', 'ditə', 'det', 'nud', 'dətud', 'ɡut͡ʃʔed', 'dəd', 'ɡidmad', 'dət͡ʃə', 'd͡ʒiɡdub', 'fildad', 'jetku', 'tamdu', 'dəd͡ʒi', 'lətpu', 'dutt͡ʃa', 'talta', 'ɡedjeb', 'tum', 'kih', 'ʒit͡ʃke', 'puŋd͡ʒuf', 'piʒvik'],
			SR: ['t͡ʃuŋd̪i', 'batt̪i', 'vədd̪i', 'd̪etam', 't̪elju', 'wiɡd̪e', 'bed̪it', 'nəzd̪iŋ', 'd̪eŋʒij', 't̪edaz', 't̪itha', 'd̪eznaw', 'd̪emt̪eɡ', 'mid̪i', 'd̪iki', 'mad̪i', 't̪imt̪ed', 't̪i', 'd̪itə', 'd̪et', 'nud', 'dətud', 'ɡut͡ʃʔed', 'dəd', 'ɡidmad', 'dət͡ʃə', 'd͡ʒiɡdub', 'fildad', 'jetku', 'tamdu', 'dəd͡ʒi', 'lətpu', 'dutt͡ʃa', 'talta', 'ɡedjeb', 'tum', 'kih', 'ʒit͡ʃke', 'puŋd͡ʒuf', 'piʒvik'],
			gloss: ['some', 'hummus', 'adjust', 'speak', 'pea', 'lie down', 'how', 'hot', 'he/she', 'like', 'crawl', 'vegetable', 'listen', 'buttocks', 'learn', 'good', 'peanut', 'eat', 'take', 'evening', 'feather', 'eye', 'blue/green', 'earth', 'give', 'old', 'strawberry', 'earlobe', 'saliva', 'hug', 'spouse', 'hope', 'four', 'we (excl)', 'choose', 'ash', 'every', 'rough', 'they (neut)', 'daughter']

		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "i ɪ ɨ",
			ruleType: "Mixed",
			phoneme: "p b t d k g t͡ʃ d͡ʒ f θ s ʃ m n r w j i ɪ e ɛ ɔ o ʊ u a",
			ruleTxt: "retraction of high front vowels after postalveolars",
			UR: ['t͡ʃit͡ʃe', 't͡ʃiθiθ', 'wɪrd͡ʒis', 'sɪɡd͡ʒi', 't͡ʃibd͡ʒa', 'rɪɡd͡ʒi', 'fid͡ʒiθ', 'ʃikʃef', 'd͡ʒipsɪ', 'nupt͡ʃiw', 'ɡɔʃit͡ʃ', 'mʊɡd͡ʒi', 'd͡ʒɪt͡ʃit', 'ʃit͡ʃpu', 'd͡ʒiktɔ', 'ʃitɪb', 'ramʃɪ', 'ʃɪbref', 'd͡ʒɪ', 'tɛst͡ʃɪʃ', 'nɪftib', 'rɪfpu', 'mɪj', 'θɪrɪ', 'jɪ', 'kukɪ', 'famɪʃ', 'θɪn', 'tɪɡʊ', 'tad͡ʒni', 'sɪʃpɛf', 'ɡit͡ʃseɡ', 'dit', 'rinsis', 'kid͡ʒrɪ', 'kanθi', 'wɔɡd͡ʒo', 'pu', 'bej', 'paf'],
			SR: ['t͡ʃɨt͡ʃe', 't͡ʃɨθiθ', 'wɪrd͡ʒɨs', 'sɪɡd͡ʒɨ', 't͡ʃɨbd͡ʒa', 'rɪɡd͡ʒɨ', 'fid͡ʒɨθ', 'ʃɨkʃef', 'd͡ʒɨpsɪ', 'nupt͡ʃɨw', 'ɡɔʃɨt͡ʃ', 'mʊɡd͡ʒɨ', 'd͡ʒɪt͡ʃɨt', 'ʃɨt͡ʃpu', 'd͡ʒɨktɔ', 'ʃɨtɪb', 'ramʃɪ', 'ʃɪbref', 'd͡ʒɪ', 'tɛst͡ʃɪʃ', 'nɪftib', 'rɪfpu', 'mɪj', 'θɪrɪ', 'jɪ', 'kukɪ', 'famɪʃ', 'θɪn', 'tɪɡʊ', 'tad͡ʒni', 'sɪʃpɛf', 'ɡit͡ʃseɡ', 'dit', 'rinsis', 'kid͡ʒrɪ', 'kanθi', 'wɔɡd͡ʒo', 'pu', 'bej', 'paf'],
			gloss: ['assume', 'five', 'build', 'thigh', 'spicy', 'stream', 'I', 'dim', 'sell', 'person', 'spinach', 'yellow', 'bumpy', 'eat', 'old', 'husband', 'mother', 'dolphin', 'stretch', 'sibling', 'aunt', 'throat', 'they (masc)', 'cow', 'hug', 'breathe', 'heavy', 'hesitate', 'he', 'snow', 'repair', 'rye', 'tongue', 'liquid', 'why', 'eyebrow', 'sparrow', 'cloud', 'wood', 'beard']

		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			poi: "ɛ æ a ɑ ʌ ə",
			ruleType: "Mixed",
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ m n ŋ l i ɛ ɔ u ə æ a ɑ",
			ruleTxt: "raising of low vowels before voiceless codas",
			UR: ['ŋætfæ', 'ðɑθʃæz', 'tæffæ', 'ŋat͡ʃθan', 't͡ʃat͡ʃfam', 'd͡ʒæssɑb', 'vaʃfiv', 't͡ʃaʃt͡ʃəd͡ʒ', 'fakpæd͡ʒ', 'kɑθt͡ʃa', 'vɑfas', 'fɑs', 'ʃinʃæʃ', 'ɡɑtaf', 'tubæk', 'ðæθæt͡ʃ', 'd͡ʒæmlæt͡ʃ', 't͡ʃɛʒbas', 'zifsaʃ', 'kɔssas', 'pamsɔ', 'ʃæmaʒ', 'læŋʃa', 'nɛssɑ', 'təbab', 'kɑn', 'suzbæʃ', 'kɑba', 'sælæ', 't͡ʃa', 'ɡɑmɑ', 't͡ʃɑ', 'θæfæ', 'd͡ʒæpæz', 'ɡɔmað', 'mɛmθɑ', 'ʃɛθt͡ʃɛt͡ʃ', 'ŋəðd͡ʒis', 'ʒuf', 'pilɛ'],
			SR: ['ŋɛtfæ', 'ðʌθʃæz', 'tɛffæ', 'ŋət͡ʃθan', 't͡ʃət͡ʃfam', 'd͡ʒɛssɑb', 'vəʃfiv', 't͡ʃəʃt͡ʃəd͡ʒ', 'fəkpæd͡ʒ', 'kʌθt͡ʃa', 'vɑfəs', 'fʌs', 'ʃinʃɛʃ', 'ɡɑtəf', 'tubɛk', 'ðæθɛt͡ʃ', 'd͡ʒæmlɛt͡ʃ', 't͡ʃɛʒbəs', 'zifsəʃ', 'kɔssəs', 'pamsɔ', 'ʃæmaʒ', 'læŋʃa', 'nɛssɑ', 'təbab', 'kɑn', 'suzbɛʃ', 'kɑba', 'sælæ', 't͡ʃa', 'ɡɑmɑ', 't͡ʃɑ', 'θæfæ', 'd͡ʒæpæz', 'ɡɔmað', 'mɛmθɑ', 'ʃɛθt͡ʃɛt͡ʃ', 'ŋəðd͡ʒis', 'ʒuf', 'pilɛ'],
			gloss: ['damp', 'fog', 'discover', 'bumpy', 'soup', 'valley', 'young', 'friend', 'many', 'they (neut)', 'hill', 'coyote', 'tree', 'teach', 'evening', 'digest', 'evil', 'look', 'ash', 'skin', 'cow', 'five', 'brain', 'I', 'oil', 'daughter', 'father', 'grape', 'family', 'one', 'slither', 'talk', 'newt', 'survive', 'stretch', 'give', 'small', 'uphill', 'brother', 'spinach']

		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g f v θ ð s z ʃ ʒ h n r j i ɪ e ɛ ɔ o ʊ u a ",
			ruleType: "Mixed",
			poi: "i ɪ ɨ ",
			UR: ['ʃiv', 'ðuʃi', 'diʃiɡ', 'bɪʒi', 'ʃita', 'jɪzʒi', 'ʃi', 'ʒiθtɪh', 'ʃiz', 'ɡɔθʃi', 'ʒijɪ', 'hunʒi', 'ʃidvɪ', 'ʃifiθ', 'revʒi', 'ʃirni', 'ʃɪ', 'hɪʃʃɪ', 'vahʃɪ', 'tosʃɪ', 'nɪvdɛ', 'hivi', 'hɪr', 'ɡɪhpi', 'tɪvɪð', 'zɪnbɛk', 'dɪsʃɛr', 'boððið', 'tirsij', 'kiɡrih', 'tijip', 'fɪvʊz', 'pifʃa', 'kokθið', 'jeʃtɪs', 'ðiʒron', 'ʃozrɛ', 'ðʊθfa', 'ʒʊɡad', 'ʃurzo'],
			SR: ['ʃɨv', 'ðuʃɨ', 'diʃɨɡ', 'bɪʒɨ', 'ʃɨta', 'jɪzʒɨ', 'ʃɨ', 'ʒɨθtɪh', 'ʃɨz', 'ɡɔθʃɨ', 'ʒɨjɪ', 'hunʒɨ', 'ʃɨdvɪ', 'ʃɨfiθ', 'revʒɨ', 'ʃɨrni', 'ʃɪ', 'hɪʃʃɪ', 'vahʃɪ', 'tosʃɪ', 'nɪvdɛ', 'hivi', 'hɪr', 'ɡɪhpi', 'tɪvɪð', 'zɪnbɛk', 'dɪsʃɛr', 'boððið', 'tirsij', 'kiɡrih', 'tijip', 'fɪvʊz', 'pifʃa', 'kokθið', 'jeʃtɪs', 'ðiʒron', 'ʃozrɛ', 'ðʊθfa', 'ʒʊɡad', 'ʃurzo'],
			gloss: ['trout', 'raccoon ', 'much', 'soup', 'fail', 'chicken', 'butterfly', 'chest', 'fist', 'morning', 'mango', 'allow', 'desert', 'feather', 'mouth', 'person', 'leave', 'lose', 'dirt', 'calf', 'honey', 'scream', 'possum', 'we', 'love', 'bite', 'father', 'strawberry', 'wet', 'warm', 'learn', 'she', 'smooth', 'white', 'potato', 'street', 'eyebrow', 'sibling', 'kitten', 'quinoa'],
			ruleTxt: " retraction of high front vowels after postalveolars"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ θ ð s z x ɣ m n ŋ l w j i e ɛ ə æ a ɑ ",
			ruleType: "Mixed",
			poi: "ɛ æ a ɑ ʌ ə ",
			UR: ['wəkpɑ', 'tasθæ', 'ðɑzæ', 'd͡ʒaksɑ', 'dɑla', 'bɑ', 'wæ', 'ɣæ', 'sɑðma', 'xɑnŋɑ', 'nɑŋa', 'd͡ʒɑbjɑ', 'dandɑ', 'ŋɑ', 'dæka', 'peda', 'ðɑðɑ', 'jeðæ', 'tixka', 'læθt͡ʃa', 'seŋxæɡ', 't͡ʃɛxkæw', 'kazwəɡ', 'tæɣjə', 'mɑdŋi', 'təxt͡ʃæl', 'wæd͡ʒbɛw', 'xæɣjæk', 'wat͡ʃtæl', 'tɑθ', 'dæk', 'xak', 'bæm', 'sax', 'xipæd', 'ɡɑlzæl', 'ɡezŋe', 'zɛt͡ʃkɛ', 'ɡə', 'jəðəŋ'],
			SR: ['wəkpʌ', 'tasθɛ', 'ðɑzɛ', 'd͡ʒaksʌ', 'dɑlə', 'bʌ', 'wɛ', 'ɣɛ', 'sɑðmə', 'xɑnŋʌ', 'nɑŋə', 'd͡ʒɑbjʌ', 'dandʌ', 'ŋʌ', 'dækə', 'pedə', 'ðɑðʌ', 'jeðɛ', 'tixkə', 'læθt͡ʃə', 'seŋxæɡ', 't͡ʃɛxkæw', 'kazwəɡ', 'tæɣjə', 'mɑdŋi', 'təxt͡ʃæl', 'wæd͡ʒbɛw', 'xæɣjæk', 'wat͡ʃtæl', 'tɑθ', 'dæk', 'xak', 'bæm', 'sax', 'xipæd', 'ɡɑlzæl', 'ɡezŋe', 'zɛt͡ʃkɛ', 'ɡə', 'jəðəŋ'],
			gloss: ['corn', 'like', 'earlobe', 'blue/green', 'rain', 'fox', 'brown', 'soybean', 'she', 'each', 'that', 'broth', 'get', 'accuse', 'nobody', 'south', 'flat', 'raspberry', 'fire', 'cream', 'stream', 'repair', 'sit', 'wet', 'sesame', 'dance', 'bring', 'pay', 'old', 'return', 'lemon', 'hot', 'arm', 'try', 'forehead', 'tongue', 'spinach', 'play', 'they (dual)', 'decide'],
			ruleTxt: " word-final raising of low vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v s z ʃ ʒ h x ɣ m n r l j i ɪ e ɛ ɔ o ʊ u ə æ ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ u ʊ i̥ ɪ̥ u̥ ʊ̥ ",
			UR: ['roʔhu', 'nitki', 'dilpi', 'ɡʊmhʊ', 'sʊhsɪ', 't͡ʃɪʃʔi', 'xipɪ', 'ɡɛnhʊ', 'dɛku', 'bʊhʊ', 'xɛxhu', 'ʔʊkʊ', 'pɪpʔʊ', 'bʊʔsu', 'pʊssi', 'ɣʊkxʊ', 'lɔmpi', 'kʊ', 'xepfu', 't͡ʃʊ', 'siʔsɔ', 'tiʒzij', 'ɣulkij', 'kɪmrɑ', 't͡ʃuʒrɛ', 'fuʒ', 'rɪʃtip', 'fɔktɪz', 'dʊ', 'rɪɡdɪ', 'ɣɔdvu', 'pumbʊ', 'humd͡ʒʊ', 'd͡ʒɛlʊ', 'simɣʊ', 'd͡ʒɪznʊ', 'nɑzɣɛɣ', 'ɡomhæh', 'ɣe', 'zelæh'],
			SR: ['roʔhu̥', 'nitki̥', 'dilpi̥', 'ɡʊmhʊ̥', 'sʊhsɪ̥', 't͡ʃɪʃʔi̥', 'xipɪ̥', 'ɡɛnhʊ̥', 'dɛku̥', 'bʊhʊ̥', 'xɛxhu̥', 'ʔʊkʊ̥', 'pɪpʔʊ̥', 'bʊʔsu̥', 'pʊssi̥', 'ɣʊkxʊ̥', 'lɔmpi̥', 'kʊ̥', 'xepfu̥', 't͡ʃʊ̥', 'siʔsɔ', 'tiʒzij', 'ɣulkij', 'kɪmrɑ', 't͡ʃuʒrɛ', 'fuʒ', 'rɪʃtip', 'fɔktɪz', 'dʊ', 'rɪɡdɪ', 'ɣɔdvu', 'pumbʊ', 'humd͡ʒʊ', 'd͡ʒɛlʊ', 'simɣʊ', 'd͡ʒɪznʊ', 'nɑzɣɛɣ', 'ɡomhæh', 'ɣe', 'zelæh'],
			gloss: ['tongue', 'chickpea', 'spider', 'moon', 'day', 'you (dual)', 'cold', 'head', 'that', 'assume', 'road', 'garlic', 'mango', 'sister', 'beach', 'they (neut)', 'eye', 'adapt', 'feast', 'read', 'white', 'one', 'calf', 'nowhere', 'surprise', 'new', 'flame', 'north', 'thin', 'chin', 'I', 'moss', 'use', 'blue', 'preach', 'dance', 'possum', 'bathe', 'enjoy', 'bad'],
			ruleTxt: " word-final high vowel devoicing after voiceless consonants"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z m n r l w i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ĩ ɪ̃ ẽ ɛ̃ æ̃ ã ɑ̃ õ ɔ̃ ũ ʊ̃ ə ə̃ ",
			UR: ['nəvrɛ', 'rubni', 'θolnet͡ʃ', 'mərdev', 'tæmið', 'mo', 'fibmæ', 'nɛɡd͡ʒi', 'ðelmub', 'mɛt͡ʃt͡ʃɪz', 'noɡu', 'na', 'mɔdna', 'wɛnɛn', 'mɪp', 'siɡmɑ', 'wənif', 'midɪm', 'ðəno', 'mɑlɡoθ', 'nɑvbɑ', 'maro', 'zənmob', 'sɪrmɔ', 'væ', 'ðæst͡ʃʊp', 'fidda', 'baf', 'telfɔ', 'dapʊ', 'waɡrɔ', 'toftɛs', 'setpæn', 'sifu', 'fɪttæ', 'θʊθɔt', 'bept͡ʃes', 'ɡɪfθav', 'fɪfses', 'θiw'],
			SR: ['nə̃vrɛ', 'rubnĩ', 'θolnẽt͡ʃ', 'mə̃rdev', 'tæmĩð', 'mõ', 'fibmæ̃', 'nɛ̃ɡd͡ʒi', 'ðelmũb', 'mɛ̃t͡ʃt͡ʃɪz', 'nõɡu', 'nã', 'mɔ̃dnã', 'wɛnɛ̃n', 'mɪ̃p', 'siɡmɑ̃', 'wənĩf', 'mĩdɪm', 'ðənõ', 'mɑ̃lɡoθ', 'nɑ̃vbɑ', 'mãro', 'zənmõb', 'sɪrmɔ̃', 'væ', 'ðæst͡ʃʊp', 'fidda', 'baf', 'telfɔ', 'dapʊ', 'waɡrɔ', 'toftɛs', 'setpæn', 'sifu', 'fɪttæ', 'θʊθɔt', 'bept͡ʃes', 'ɡɪfθav', 'fɪfses', 'θiw'],
			gloss: ['wet', 'dream', 'use', 'quit', 'bright', 'waterfall', 'young', 'cry', 'snake', 'niece', 'ash', 'eye', 'she', 'son', 'dolphin', 'lip', 'neck', 'mango', 'sip', 'four', 'hand', 'forgive', 'they (masc)', 'dinner', 'hedgehog', 'bounce', 'melon', 'parrot', 'we (excl)', 'big', 'clan', 'broken', 'downhill', 'you (sg)', 'there', 'nutmeg', 'dog', 'acquire', 'nobody', 'ox'],
			ruleTxt: " progressive vowel nasalization"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ s z ʃ ʒ x ɣ m n ŋ r w j i e ɛ o u ə a ",
			ruleType: "Mixed",
			poi: "b β d z g ɣ ",
			UR: ['ɡoxʔud', 'buɡrəd', 'jɛɡi', 'puɡju', 't͡ʃomid', 'buŋɣud', 'bɛzob', 'soɡ', 'ɡurbəɡ', 'nɛɡɣob', 'bɛdu', 'bəbzoɡ', 'bet͡ʃʔub', 'pibŋə', 'bustɛɡ', 'dədʒum', 'sakted', 'ɡudəʔ', 'bedə', 'zaɡɛʃ', 'purde', 'ɡɛrŋoj', 'bust͡ʃa', 'ɡəzman', 'ɡɛ', 'dit͡ʃʃə', 'bixsi', 'ɣamdɛ', 'doʃʃe', 'bəpɛz', 'desʔiʒ', 'bəmbu', 'ɡətsə', 'bermi', 'be', 'wuʒbi', 'ʃəxim', 'xəd͡ʒə', 'ʃəŋɣop', 'ɣirɛ'],
			SR: ['ɡoxʔuz', 'buɣrəz', 'jɛɣi', 'puɣju', 't͡ʃomiz', 'buŋɣuz', 'bɛzoβ', 'soɣ', 'ɡurbəɣ', 'nɛɣɣoβ', 'bɛzu', 'bəβzoɣ', 'bet͡ʃʔuβ', 'piβŋə', 'bustɛɣ', 'dəzʒum', 'saktez', 'ɡuzəʔ', 'bezə', 'zaɣɛʃ', 'purde', 'ɡɛrŋoj', 'bust͡ʃa', 'ɡəzman', 'ɡɛ', 'dit͡ʃʃə', 'bixsi', 'ɣamdɛ', 'doʃʃe', 'bəpɛz', 'desʔiʒ', 'bəmbu', 'ɡətsə', 'bermi', 'be', 'wuʒbi', 'ʃəxim', 'xəd͡ʒə', 'ʃəŋɣop', 'ɣirɛ'],
			gloss: ['buy', 'son', 'desert', 'new', 'wood', 'green', 'rye', 'mouse', 'bring', 'frog', 'husband', 'one', 'broken', 'ear', 'sleep', 'kitten', 'use', 'each', 'dove', 'lemon', 'shark', 'this', 'cook', 'what', 'white', 'understand', 'I', 'mouth', 'they (neut)', 'bright', 'saliva', 'play', 'study', 'eyelid', 'finger', 'it', 'zero', 'path', 'red', 'berry'],
			ruleTxt: " postvocalic spirantization of voiced stops"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h x ɣ m n r l w j i o u a ",
			ruleType: "Mixed",
			poi: "p b f v m m̥ t d θ ð s z ʃ ʒ n n̥ t͡ʃ d͡ʒ k g x ɣ r l r̥ l̥ j w j̥ ʍ ",
			UR: ['jaðid', 'rithav', 'ʒofxob', 'juɣ', 'saɡ', 'biθfiɣ', 'zir', 'ʃid͡ʒ', 'ʒimʃoj', 'bod͡ʒiʒ', 'd͡ʒumud', 'd͡ʒihʔud͡ʒ', 'lam', 'd͡ʒulθul', 'd͡ʒit͡ʃhad͡ʒ', 't͡ʃul', 'ramzim', 'wal', 'ɣomxoj', 'poðriɣ', 'ðiɡʒo', 'dohta', 'vaɡa', 'd͡ʒust͡ʃi', 'buðuʔ', 'dut͡ʃθo', 'tid͡ʒu', 'momfa', 'ramtup', 'vomd͡ʒu', 'ɡupt͡ʃo', 'wiʒo', 'ðilvu', 'xaɣox', 'rumθi', 'ʒuʒda', 'xof', 'tit͡ʃo', 't͡ʃaxuk', 't͡ʃaʔʃa'],
			SR: ['jaðit', 'rithaf', 'ʒofxop', 'jux', 'sak', 'biθfix', 'zir̥', 'ʃit͡ʃ', 'ʒimʃoj̥', 'bod͡ʒiʃ', 'd͡ʒumut', 'd͡ʒihʔut͡ʃ', 'lam̥', 'd͡ʒulθul̥', 'd͡ʒit͡ʃhat͡ʃ', 't͡ʃul̥', 'ramzim̥', 'wal̥', 'ɣomxoj̥', 'poðrix', 'ðiɡʒo', 'dohta', 'vaɡa', 'd͡ʒust͡ʃi', 'buðuʔ', 'dut͡ʃθo', 'tid͡ʒu', 'momfa', 'ramtup', 'vomd͡ʒu', 'ɡupt͡ʃo', 'wiʒo', 'ðilvu', 'xaɣox', 'rumθi', 'ʒuʒda', 'xof', 'tit͡ʃo', 't͡ʃaxuk', 't͡ʃaʔʃa'],
			gloss: ['father', 'experience', 'lunch', 'beard', 'shark', 'north', 'nostril', 'blackberry', 'full', 'that', 'jaw', 'night', 'say', 'white', 'broken', 'kitten', 'succeed', 'flame', 'we (excl)', 'arrive', 'river', 'cantaloupe', 'rain', 'nutmeg', 'turtle', 'fog', 'damp', 'who', 'nowhere', 'fail', 'bone', 'road', 'surprise', 'he/she', 'face', 'purple', 'lie down', 'improve', 'eyebrow', 'ketchup'],
			ruleTxt: " word-final stop devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z x ɣ m n ŋ r l j i e ɛ ɔ o ə æ ɑ ",
			ruleType: "Neutralizing",
			poi: "f v θ ð s z x ɣ ",
			UR: ['memsæ', 'mɔŋxɔ', 'ɡənfɔ', 'pɛŋθɔθ', 'ɡomxɑ', 'θæmθɑ', 'rɛnθɔx', 'keŋθi', 'bimsæð', 'ʔəmxɔ', 'xɔŋθæl', 'feŋfix', 'ʔæmsə', 'tiŋθo', 'ðæŋsɛ', 'fɔŋxɛ', 'xeŋθɔ', 'lɑnθif', 'vɑŋxə', 'tæmsæθ', 'fosə', 'xemmæ', 'θɔ', 'θɔfxɛj', 'xæfʔɑx', 'θorpe', 'fəxɛ', 'fib', 'sæssɑ', 'fəxtæs', 'seθkɔf', 'tɔfpɔ', 'xɔzɡɛ', 'ʔifsek', 'xəlðɛ', 'soθɛð', 'betpe', 'ɡeje', 'ʔɔppæv', 'ræʔ'],
			SR: ['memzæ', 'mɔŋɣɔ', 'ɡənvɔ', 'pɛŋðɔθ', 'ɡomɣɑ', 'θæmðɑ', 'rɛnðɔx', 'keŋði', 'bimzæð', 'ʔəmɣɔ', 'xɔŋðæl', 'feŋvix', 'ʔæmzə', 'tiŋðo', 'ðæŋzɛ', 'fɔŋɣɛ', 'xeŋðɔ', 'lɑnðif', 'vɑŋɣə', 'tæmzæθ', 'fosə', 'xemmæ', 'θɔ', 'θɔfxɛj', 'xæfʔɑx', 'θorpe', 'fəxɛ', 'fib', 'sæssɑ', 'fəxtæs', 'seθkɔf', 'tɔfpɔ', 'xɔzɡɛ', 'ʔifsek', 'xəlðɛ', 'soθɛð', 'betpe', 'ɡeje', 'ʔɔppæv', 'ræʔ'],
			gloss: ['stone', 'they (neut)', 'belly', 'swim', 'few', 'many', 'lose', 'wife', 'brother', 'almond', 'celery', 'heavy', 'name', 'mango', 'night', 'person', 'earlobe', 'talk', 'brown', 'blueberry', 'you (pl)', 'digest', 'duck', 'dream', 'spider', 'four', 'forest', 'come', 'herring', 'grow', 'calf', 'neck', 'food', 'ash', 'threaten', 'kill', 'dislike', 'each', 'those', 'south'],
			ruleTxt: " postnasal voicing of fricatives"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h x ɣ n ŋ r w j i ɛ u a ",
			ruleType: "Alternating",
			poi: "ç ʝ x ɣ ",
			UR: ['ɡiɣɛx', 'riɣɣuɣ', 'taɣɣiɣ', 'ʔuθxix', 'wassix', 'ʔiɣɣɛð', 'xaŋtix', 'ʃiɣif', 'xɛfxix', 'ʃɛðɣix', 'pɛrɣiɣ', 'ɣuŋriɣ', 'fiɣda', 'ɣiŋŋiɣ', 'ɣiɣɣa', 'xixi', 'xiɣɡi', 'xiɣu', 'ziɣd͡ʒi', 'viɣ', 'fɛpfɛɣ', 'huxxu', 'xahsi', 'ðid͡ʒɛx', 'xinʔa', 'ɣinvuɣ', 'funxif', 'ziɡuɣ', 'ɣaʔɛð', 'ɣurɣa', 'ɣir', 'ɣuɣjuf', 'haŋxuw', 'ɣu', 'xad', 'ɣɛɣa', 'faðŋuk', 'hɛðuw', 'ʃɛ', 'kand͡ʒij'],
			SR: ['ɡiʝɛx', 'riʝɣuɣ', 'taɣɣiʝ', 'ʔuθxiç', 'wassiç', 'ʔiʝɣɛð', 'xaŋtiç', 'ʃiʝif', 'xɛfxiç', 'ʃɛðɣiç', 'pɛrɣiʝ', 'ɣuŋriʝ', 'fiʝda', 'ɣiŋŋiʝ', 'ɣiʝɣa', 'xiçi', 'xiʝɡi', 'xiʝu', 'ziʝd͡ʒi', 'viʝ', 'fɛpfɛɣ', 'huxxu', 'xahsi', 'ðid͡ʒɛx', 'xinʔa', 'ɣinvuɣ', 'funxif', 'ziɡuɣ', 'ɣaʔɛð', 'ɣurɣa', 'ɣir', 'ɣuɣjuf', 'haŋxuw', 'ɣu', 'xad', 'ɣɛɣa', 'faðŋuk', 'hɛðuw', 'ʃɛ', 'kand͡ʒij'],
			gloss: ['father', 'warm', 'camel', 'empty', 'liquid', 'ash', 'break', 'acorn', 'grain', 'flesh', 'valley', 'salt', 'teach', 'trout', 'wife', 'beaver', 'abdomen', 'dark', 'wet', 'buttocks', 'that', 'earlobe', 'brain', 'falafel', 'pear', 'ketchup', 'he/she/it', 'inland', 'speak', 'they (fem)', 'eyebrow', 'lip', 'we (excl)', 'each', 'hope', 'find', 'regret', 'lizard', 'white', 'adapt'],
			ruleTxt: " palatalization of velar fricatives after high front vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f θ s h x m n ŋ r w j i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ə i̥ ɪ̥ e̥ ɛ̥ æ̥ ḁ ɑ̥ o̥ ɔ̥ u̥ ʊ̥ ə̥ ",
			UR: ['kupkɛ', 'sɔt͡ʃfi', 'ŋepfa', 'jɪmjæ', 'pet͡ʃpa', 'bʊ', 'koru', 'jofʔo', 'rɔdæ', 'd͡ʒɪ', 'ŋirbə', 'tort͡ʃɑ', 'rad͡ʒda', 'jɔd͡ʒŋe', 'xʊ', 'dəkɔ', 'ŋurʔi', 'hɛnka', 'θod͡ʒɡu', 'θuŋɡɪ', 'ma', 'pɛθpɪ', 'wɔd͡ʒme', 'hintə', 'd͡ʒunʔæw', 'kʊθkɑp', 'jahɪt͡ʃ', 'xɔkar', 'fɑd͡ʒrʊd', 'jeb', 'ɡɪdwæʔ', 'mæhtom', 'θɔh', 'jurʔen', 'kɛd͡ʒmɪd', 'baŋ', 'wɑht͡ʃon', 'fʊdrɑn', 'bim', 't͡ʃæt͡ʃuθ'],
			SR: ['kupkɛ̥', 'sɔt͡ʃfi̥', 'ŋepfḁ', 'jɪmjæ̥', 'pet͡ʃpḁ', 'bʊ̥', 'koru̥', 'jofʔo̥', 'rɔdæ̥', 'd͡ʒɪ̥', 'ŋirbə̥', 'tort͡ʃɑ̥', 'rad͡ʒdḁ', 'jɔd͡ʒŋe̥', 'xʊ̥', 'dəkɔ̥', 'ŋurʔi̥', 'hɛnkḁ', 'θod͡ʒɡu̥', 'θuŋɡɪ̥', 'mḁ', 'pɛθpɪ̥', 'wɔd͡ʒme̥', 'hintə̥', 'd͡ʒunʔæw', 'kʊθkɑp', 'jahɪt͡ʃ', 'xɔkar', 'fɑd͡ʒrʊd', 'jeb', 'ɡɪdwæʔ', 'mæhtom', 'θɔh', 'jurʔen', 'kɛd͡ʒmɪd', 'baŋ', 'wɑht͡ʃon', 'fʊdrɑn', 'bim', 't͡ʃæt͡ʃuθ'],
			gloss: ['gourd', 'no', 'leave', 'each', 'nostril', 'parent', 'rye', 'black', 'mouth', 'talk', 'head', 'dark', 'white', 'elk', 'cashew', 'hear', 'potato', 'then', 'salmon', 'skin', 'wood', 'west', 'warm', 'water', 'moon', 'path', 'possess', 'grape', 'bathe', 'sit', 'ten', 'you (sg)', 'who', 'sleep', 'meat', 'dry', 'morning', 'flame', 'sibling', 'sell'],
			ruleTxt: " word-final vowel devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g ʔ t͡ʃ s ʃ h x m n ŋ l w j i ɪ e ɛ ɔ o ʊ u ə æ ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ u ʊ i̥ ɪ̥ u̥ ʊ̥ ",
			UR: ['xʊɡwu', 't͡ʃɛltu', 'xi', 'ɡuhku', 'kiɡmi', 'lɪɡnu', 'ŋʊɡnu', 'ʔɪɡwʊ', 'ʃɑlt͡ʃʊ', 't͡ʃækɪ', 't͡ʃɔhxi', 'ɡextu', 'piʃkɪ', 'ɡeʔi', 'lɪ', 'ŋɪxhi', 'nɛmnɪ', 'ʃetpʊ', 'keʔi', 'ŋækʃʊ', 'ɡuɡwɪm', 'momnɪn', 'tulpɪt͡ʃ', 'pʊɡnʊŋ', 'mut͡ʃxɑk', 'ʔɛʃkɪt', 'kɪɡŋo', 'pɑɡjux', 'ŋuɡ', 'mɪkul', 't͡ʃiʃʃʊs', 'ɡitxɛ', 'kɪɡŋiw', 'ŋihɛm', 'xɪʃ', 'noɡlix', 'xɑxpe', 'ʃelʔo', 'jɛmt͡ʃə', 'weɡɡɑ'],
			SR: ['xʊɡwu̥', 't͡ʃɛltu̥', 'xi̥', 'ɡuhku̥', 'kiɡmi̥', 'lɪɡnu̥', 'ŋʊɡnu̥', 'ʔɪɡwʊ̥', 'ʃɑlt͡ʃʊ̥', 't͡ʃækɪ̥', 't͡ʃɔhxi̥', 'ɡextu̥', 'piʃkɪ̥', 'ɡeʔi̥', 'lɪ̥', 'ŋɪxhi̥', 'nɛmnɪ̥', 'ʃetpʊ̥', 'keʔi̥', 'ŋækʃʊ̥', 'ɡuɡwɪm', 'momnɪn', 'tulpɪt͡ʃ', 'pʊɡnʊŋ', 'mut͡ʃxɑk', 'ʔɛʃkɪt', 'kɪɡŋo', 'pɑɡjux', 'ŋuɡ', 'mɪkul', 't͡ʃiʃʃʊs', 'ɡitxɛ', 'kɪɡŋiw', 'ŋihɛm', 'xɪʃ', 'noɡlix', 'xɑxpe', 'ʃelʔo', 'jɛmt͡ʃə', 'weɡɡɑ'],
			gloss: ['warm', 'milk', 'allow', 'fail', 'broken', 'rabbit', 'grape', 'ancestor', 'claw', 'discover', 'mango', 'many', 'ash', 'chicken', 'island', 'saliva', 'arrive', 'not', 'breathe', 'person', 'brother', 'ice', 'crawl', 'adore', 'full', 'sit', 'new', 'wood', 'know', 'midday ', 'forgive', 'rock', 'elbow', 'eyelash', 'survive', 'murky', 'speak', 'ten', 'gravy', 'direction'],
			ruleTxt: " word-final high vowel devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g f v s z ʃ ʒ m n l w j i ɔ o u ə a ",
			ruleType: "Neutralizing",
			poi: "s z ʃ ʒ ",
			UR: ['təsuz', 'kas', 'soʒzəz', 'vənnus', 'tunzɔs', 'zɔfɔs', 'tatpas', 'nəstas', 'kiddɔz', 'ʃəssɔs', 'wiz', 'ziɡzəz', 'ʒavaz', 'zapkoz', 'jəzʒɔs', 'ɡildaz', 'bivəz', 'jisus', 'sɔtɔz', 'sas', 'lotsɔ', 'kizzoɡ', 'fəʒzɔ', 'natsi', 'ʒuzɔb', 'zama', 'zamku', 'zomsu', 'winzi', 'zəsʃɔʒ', 'ʒiso', 'səʒwo', 'jozʒo', 'zosə', 'sɔlzo', 'moso', 'minu', 'lofi', 'kɔndi', 'kəʒʒi'],
			SR: ['təsuʒ', 'kaʃ', 'soʒzəʒ', 'vənnuʃ', 'tunzɔʃ', 'zɔfɔʃ', 'tatpaʃ', 'nəstaʃ', 'kiddɔʒ', 'ʃəssɔʃ', 'wiʒ', 'ziɡzəʒ', 'ʒavaʒ', 'zapkoʒ', 'jəzʒɔʃ', 'ɡildaʒ', 'bivəʒ', 'jisuʃ', 'sɔtɔʒ', 'saʃ', 'lotsɔ', 'kizzoɡ', 'fəʒzɔ', 'natsi', 'ʒuzɔb', 'zama', 'zamku', 'zomsu', 'winzi', 'zəsʃɔʒ', 'ʒiso', 'səʒwo', 'jozʒo', 'zosə', 'sɔlzo', 'moso', 'minu', 'lofi', 'kɔndi', 'kəʒʒi'],
			gloss: ['moss', 'cantaloupe', 'he/she/it', 'they', 'eat', 'like', 'wish', 'believe', 'coastline', 'sand', 'continue', 'nobody', 'day', 'rain', 'tuna', 'surprise', 'we (excl)', 'evil', 'meal', 'soybean', 'kitten', 'open', 'wet', 'warm', 'coyote', 'eyebrow', 'father', 'thick', 'grey', 'take', 'murky', 'egg', 'all', 'mango', 'fog', 'listen', 'cook', 'name', 'milk', 'sea'],
			ruleTxt: " word-final ashibilation of alveolar fricatives"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g ʔ f θ s ʃ h x n ŋ r w j i e ɛ ɔ u a ",
			ruleType: "Mixed",
			poi: "p t k pʰ tʰ kʰ ʔ ",
			UR: ['xerʃɛk', 'sexhet', 'wiɡret', 'ʔiθtɛp', 'sɛk', 'ʔit', 'rɔɡnɛt', 'θɔnʔup', 'tɔʔfuk', 'ʔak', 'pɛk', 'θatup', 'ʃap', 'ʔɔfɛt', 'fukut', 'pɔʃpuk', 'hinpiʔ', 'ʃuxeʔ', 'tuɡreʔ', 'ʔɔɡŋɔʔ', 'perkux', 'kɔʔɛ', 'teɡ', 'hiʔtɔ', 'tɔrke', 'tɔɡneɡ', 'tɛ', 'ʔiɡja', 'tajiw', 'kaŋ', 'ʔaɡɡa', 'patu', 'kaɡɡu', 'juŋpe', 'pa', 'jɔkθa', 'sɛθ', 'wuŋju', 'seɡwiw', 'fɛnθɛx'],
			SR: ['xerʃɛkʰ', 'sexhetʰ', 'wiɡretʰ', 'ʔiθtɛpʰ', 'sɛkʰ', 'ʔitʰ', 'rɔɡnɛtʰ', 'θɔnʔupʰ', 'tɔʔfukʰ', 'ʔakʰ', 'pɛkʰ', 'θatupʰ', 'ʃapʰ', 'ʔɔfɛtʰ', 'fukutʰ', 'pɔʃpukʰ', 'hinpiʔ', 'ʃuxeʔ', 'tuɡreʔ', 'ʔɔɡŋɔʔ', 'perkux', 'kɔʔɛ', 'teɡ', 'hiʔtɔ', 'tɔrke', 'tɔɡneɡ', 'tɛ', 'ʔiɡja', 'tajiw', 'kaŋ', 'ʔaɡɡa', 'patu', 'kaɡɡu', 'juŋpe', 'pa', 'jɔkθa', 'sɛθ', 'wuŋju', 'seɡwiw', 'fɛnθɛx'],
			gloss: ['uncle', 'flame', 'grapefruit', 'we', 'lizard', 'some', 'he/she/it', 'nut', 'lose', 'clear', 'discover', 'wolf', 'morning', 'jaw', 'lion', 'rain', 'walk', 'red', 'you (pl)', 'assume', 'zero', 'smooth', 'accuse', 'butterfly', 'honey', 'tree', 'sibling', 'duck', 'hope', 'arrive', 'wet', 'breakfast', 'inland', 'tomato', 'pebble', 'which', 'earlobe', 'llama', 'hesitate', 'wheat'],
			ruleTxt: " word-final aspiration of voiceless stops"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z m n ŋ r i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ĩ ɪ̃ ẽ ɛ̃ æ̃ ã ɑ̃ õ ɔ̃ ũ ʊ̃ ə ə̃ ",
			UR: ['duɡŋʊv', 'ŋevbæf', 'bovŋʊr', 'zɪdnʊn', 'ŋekfiv', 'mu', 'd͡ʒʊdmɔr', 'me', 'ŋapθæŋ', 'miɡnɛ', 'sɪmŋip', 'ðɑŋɑf', 'ŋomðum', 'nævbed', 'ŋɛmðep', 'mɔkɛ', 'nʊfo', 'θiðnæ', 'memop', 'madæ', 'ma', 't͡ʃɔvmɪ', 'ranud', 'ŋəvɛ', 'θɛ', 't͡ʃiv', 'vɛnrɪs', 'ðəd', 'kervʊd͡ʒ', 'θotki', 'zʊvrɑɡ', 'zɪrɡɛ', 'ɡud͡ʒe', 'd͡ʒəvre', 'rɔpθæ', 't͡ʃəm', 'tɛŋd͡ʒɪ', 'θɔðem', 'pum', 't͡ʃɛk'],
			SR: ['duɡŋʊ̃v', 'ŋẽvbæf', 'bovŋʊ̃r', 'zɪdnʊ̃n', 'ŋẽkfiv', 'mũ', 'd͡ʒʊdmɔ̃r', 'mẽ', 'ŋãpθæŋ', 'mĩɡnɛ̃', 'sɪmŋĩp', 'ðɑŋɑ̃f', 'ŋõmðum', 'næ̃vbed', 'ŋɛ̃mðep', 'mɔ̃kɛ', 'nʊ̃fo', 'θiðnæ̃', 'mẽmõp', 'mãdæ', 'mã', 't͡ʃɔvmɪ̃', 'ranũd', 'ŋə̃vɛ', 'θɛ', 't͡ʃiv', 'vɛnrɪs', 'ðəd', 'kervʊd͡ʒ', 'θotki', 'zʊvrɑɡ', 'zɪrɡɛ', 'ɡud͡ʒe', 'd͡ʒəvre', 'rɔpθæ', 't͡ʃəm', 'tɛŋd͡ʒɪ', 'θɔðem', 'pum', 't͡ʃɛk'],
			gloss: ['we (dual)', 'flat', 'understand', 'mud', 'dark', 'bile', 'good', 'direction', 'north', 'tooth', 'roll', 'ear', 'thin', 'cold', 'waist', 'few', 'mustard', 'skin', 'duck', 'hide', 'blueberry', 'lion', 'uncle', 'spouse', 'star', 'stand', 'onion', 'break', 'eat', 'survive', 'dog', 'hand', 'bean', 'horn', 'soup', 'they', 'eyelash', 'fish', 'explain', 'parent'],
			ruleTxt: " progressive vowel nasalization"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g f s ʃ h x m n ŋ j i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ə i̥ ɪ̥ e̥ ɛ̥ æ̥ ḁ ɑ̥ o̥ ɔ̥ u̥ ʊ̥ ə̥ ",
			UR: ['xæxpu', 'kɪdda', 'ʃo', 'sænsæ', 'totɪ', 'dɪ', 'fʊjæ', 'fikɑ', 'tokfæ', 'ɡubnɔ', 'mæjɪ', 'nəɡjɛ', 'huxxa', 'hajo', 'ʃoŋŋi', 'mæŋfə', 'fæ', 'ɡa', 'hɑmdo', 'jɛ', 'ɡʊmʊ', 'xə', 'hɛja', 'ŋoje', 'məmuf', 'jimɑj', 'bomfum', 'pidɡɪh', 'ɡʊk', 'huŋbʊp', 'nʊɡmuk', 'nɑjɔk', 'nudmæʃ', 'xæp', 'mumfaŋ', 'nenxəb', 'fɛʃan', 'nænɡaŋ', 'jɪd', 'ŋɛbjuɡ'],
			SR: ['xæxpu̥', 'kɪddḁ', 'ʃo̥', 'sænsæ̥', 'totɪ̥', 'dɪ̥', 'fʊjæ̥', 'fikɑ̥', 'tokfæ̥', 'ɡubnɔ̥', 'mæjɪ̥', 'nəɡjɛ̥', 'huxxḁ', 'hajo̥', 'ʃoŋŋi̥', 'mæŋfə̥', 'fæ̥', 'ɡḁ', 'hɑmdo̥', 'jɛ̥', 'ɡʊmʊ̥', 'xə̥', 'hɛjḁ', 'ŋoje̥', 'məmuf', 'jimɑj', 'bomfum', 'pidɡɪh', 'ɡʊk', 'huŋbʊp', 'nʊɡmuk', 'nɑjɔk', 'nudmæʃ', 'xæp', 'mumfaŋ', 'nenxəb', 'fɛʃan', 'nænɡaŋ', 'jɪd', 'ŋɛbjuɡ'],
			gloss: ['eye', 'smooth', 'enjoy', 'apple', 'path', 'die', 'coastline', 'blue/green', 'son', 'young', 'digest', 'raspberry', 'pond', 'waist', 'push', 'crawl', 'read', 'vinegar', 'rain', 'warm', 'few', 'obtain', 'hair', 'there', 'no', 'return', 'cloud', 'calf', 'watermelon', 'east', 'choose', 'potato', 'pink', 'develop', 'good', 'they (dual)', 'elbow', 'chicken', 'peanut', 'dark'],
			ruleTxt: " word-final vowel devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ m n ŋ l w j i ɪ e ɔ o ʊ u ə æ ɑ ",
			ruleType: "Neutralizing",
			poi: "p b f v t d θ ð s z ʃ ʒ t͡ʃ d͡ʒ k g ",
			UR: ['ðiv', 'dubbəv', 'wib', 'bæktɔd͡ʒ', 'ziŋzʊd͡ʒ', 'd͡ʒɔlɡʊð', 'zeb', 'miŋdəd͡ʒ', 't͡ʃobd͡ʒeʒ', 'ðed', 'pæʔsiʒ', 'lɑŋðuɡ', 'd͡ʒʊlʔɪʒ', 'dʊpʔod͡ʒ', 'dæptʊð', 'ɡokfʊɡ', 'ʃɪʒzov', 'ʒoz', 'nezæb', 'dæðʒɪb', 'jəʒvɑ', 'veʃsæ', 'zɔd͡ʒɑ', 'dʊʔfo', 'ʒutsɑ', 'ðew', 'ɡɑw', 'besfu', 'bezʒɑ', 'peðdot', 'ɡɪbi', 'mænʒʊ', 'd͡ʒɑlʃæ', 'zɪʒðo', 'bɪvd͡ʒɑm', 'dɔmd͡ʒɑ', 'ʔoltuj', 'ʔuf', 'mʊm', 'ʔækʃeʃ'],
			SR: ['ðif', 'dubbəf', 'wip', 'bæktɔt͡ʃ', 'ziŋzʊt͡ʃ', 'd͡ʒɔlɡʊθ', 'zep', 'miŋdət͡ʃ', 't͡ʃobd͡ʒeʃ', 'ðet', 'pæʔsiʃ', 'lɑŋðuk', 'd͡ʒʊlʔɪʃ', 'dʊpʔot͡ʃ', 'dæptʊθ', 'ɡokfʊk', 'ʃɪʒzof', 'ʒos', 'nezæp', 'dæðʒɪp', 'jəʒvɑ', 'veʃsæ', 'zɔd͡ʒɑ', 'dʊʔfo', 'ʒutsɑ', 'ðew', 'ɡɑw', 'besfu', 'bezʒɑ', 'peðdot', 'ɡɪbi', 'mænʒʊ', 'd͡ʒɑlʃæ', 'zɪʒðo', 'bɪvd͡ʒɑm', 'dɔmd͡ʒɑ', 'ʔoltuj', 'ʔuf', 'mʊm', 'ʔækʃeʃ'],
			gloss: ['assume', 'breakfast', 'cow', 'south', 'digest', 'spinach', 'cold', 'beard', 'succeed', 'clear', 'depend on', 'direction', 'fail', 'find', 'quit', 'thick', 'most', 'waist', 'grape', 'eel', 'cucumber', 'wet', 'young', 'pinch', 'egg', 'blood', 'sister', 'dog', 'I', 'two', 'chicken', 'love', 'desert', 'clan', 'blue/green', 'mouse', 'husband', 'waterfall', 'ear', 'cloud'],
			ruleTxt: " word-final obstruent devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h m n ŋ r l j i u ə a ",
			ruleType: "Neutralizing",
			poi: "p b t d t͡ʃ d͡ʒ k g ",
			UR: ['hiɡad', 'lat͡ʃʃud', 'rulɡid', 'ŋuzbib', 'ɡəkkad', 'd͡ʒad', 'd͡ʒad͡ʒaɡ', 'ɡuɡ', 'bidbad͡ʒ', 'd͡ʒamθid', 'ɡikʃid', 'suvəɡ', 'budrəɡ', 'raŋrəɡ', 'ɡad͡ʒlaɡ', 'zad', 'θatt͡ʃib', 'ɡiʒd͡ʒaɡ', 'daʒŋiɡ', 'dilnəd͡ʒ', 'dunbaʃ', 'd͡ʒild͡ʒə', 'ɡəlɡəv', 'd͡ʒim', 'fiŋd͡ʒiθ', 'badu', 'dista', 'buzvə', 'siðɡus', 'ɡabda', 'ɡaba', 'jaŋdi', 'zəd͡ʒd͡ʒə', 'ʔibza', 'ɡə', 'babbəŋ', 't͡ʃuhʔə', 'ha', 'mahəʒ', 'hil'],
			SR: ['hiɡat', 'lat͡ʃʃut', 'rulɡit', 'ŋuzbip', 'ɡəkkat', 'd͡ʒat', 'd͡ʒad͡ʒak', 'ɡuk', 'bidbat͡ʃ', 'd͡ʒamθit', 'ɡikʃit', 'suvək', 'budrək', 'raŋrək', 'ɡad͡ʒlak', 'zat', 'θatt͡ʃip', 'ɡiʒd͡ʒak', 'daʒŋik', 'dilnət͡ʃ', 'dunbaʃ', 'd͡ʒild͡ʒə', 'ɡəlɡəv', 'd͡ʒim', 'fiŋd͡ʒiθ', 'badu', 'dista', 'buzvə', 'siðɡus', 'ɡabda', 'ɡaba', 'jaŋdi', 'zəd͡ʒd͡ʒə', 'ʔibza', 'ɡə', 'babbəŋ', 't͡ʃuhʔə', 'ha', 'mahəʒ', 'hil'],
			gloss: ['I', 'butterfly', 'bring', 'flesh', 'wheat', 'direction', 'bright', 'white', 'leave', 'you (dual)', 'valley', 'surprise', 'honey', 'star', 'blackberry', 'urine', 'sesame', 'black', 'goose', 'eyebrow', 'small', 'son', 'snow', 'forgive', 'beverage', 'kitten', 'dry', 'possess', 'husband', 'east', 'dolphin', 'where', 'rhinoceros', 'burn', 'hot', 'family', 'night', 'ignore', 'knuckle', 'zero'],
			ruleTxt: " and in A environment test rule"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g f v θ ð s z ʃ ʒ h x ɣ m n w i o u ə a ",
			ruleType: "Alternating",
			poi: "ç ʝ x ɣ ",
			UR: ['xixa', 'ðixsi', 'xiɣa', 'xəɣmix', 'xinθix', 'zixo', 'xix', 'ziɣvu', 'xəmbiɣ', 'ðiɡʒiɣ', 'ɣəɡɣix', 'ɣoɣix', 'xiɣ', 'sixhux', 'ɣiɣmu', 'mixu', 'xixθu', 'fixxaɣ', 'θəɣwiɣ', 'nix', 'xə', 'ɣozmo', 'zəftox', 'wəmxi', 'xinɣis', 'ɣu', 'ðufpox', 'xunxuʃ', 'xubaʃ', 'waɣmə', 'ɣimɣox', 'nənxa', 'ɣaɡʒəd', 'ɣəta', 'xoɣih', 'xah', 'ðadnim', 'vinfi', 'θupof', 'ʒastaʃ'],
			SR: ['xiça', 'ðiçsi', 'xiʝa', 'xəɣmiç', 'xinθiç', 'ziço', 'xiç', 'ziʝvu', 'xəmbiʝ', 'ðiɡʒiʝ', 'ɣəɡɣiç', 'ɣoɣiç', 'xiʝ', 'siçhux', 'ɣiʝmu', 'miçu', 'xiçθu', 'fiçxaɣ', 'θəɣwiʝ', 'niç', 'xə', 'ɣozmo', 'zəftox', 'wəmxi', 'xinɣis', 'ɣu', 'ðufpox', 'xunxuʃ', 'xubaʃ', 'waɣmə', 'ɣimɣox', 'nənxa', 'ɣaɡʒəd', 'ɣəta', 'xoɣih', 'xah', 'ðadnim', 'vinfi', 'θupof', 'ʒastaʃ'],
			gloss: ['butterfly', 'take', 'tongue', 'cinnamon', 'heart', 'group', 'repair', 'most', 'monkey', 'you (pl)', 'four', 'hear', 'these', 'fire', 'destroy', 'frog', 'stream', 'call', 'tomato', 'rice', 'head', 'toe', 'brother', 'fur', 'island', 'how', 'none', 'daughter', 'come', 'yellow', 'few', 'clear', 'stone', 'sip', 'bumpy', 'cloud', 'they (masc)', 'neck', 'dry', 'learn'],
			ruleTxt: " palatalization of velar fricatives after high front vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ h m n ŋ j i o u æ ɑ ",
			ruleType: "Neutralizing",
			poi: "s z ʃ ʒ ",
			UR: ['bufis', 'zuɡʒæz', 'ʔonkos', 'sæz', 'zæz', 'sæŋʃoz', 'miz', 'pis', 'ʔæmtiz', 'ɡɑŋsɑs', 'foʃʔæs', 'θæs', 'zovæz', 'mimsus', 'ʃis', 'sɑhiz', 'θoʔæz', 'θuz', 'niɡjɑz', 'zuz', 'bæsɑ', 'su', 'miso', 'hizi', 'sobjɑ', 'zæskuk', 'zumzo', 'sæzvu', 'zæzɡɑɡ', 'siʒ', 'missum', 'ʃusi', 'fiznɑ', 'ɡisθɑh', 'tizo', 'nævzi', 'ʒɑŋvæʃ', 'fæbðɑj', 'kɑðæ', 'fæ'],
			SR: ['bufiʃ', 'zuɡʒæʒ', 'ʔonkoʃ', 'sæʒ', 'zæʒ', 'sæŋʃoʒ', 'miʒ', 'piʃ', 'ʔæmtiʒ', 'ɡɑŋsɑʃ', 'foʃʔæʃ', 'θæʃ', 'zovæʒ', 'mimsuʃ', 'ʃiʃ', 'sɑhiʒ', 'θoʔæʒ', 'θuʒ', 'niɡjɑʒ', 'zuʒ', 'bæsɑ', 'su', 'miso', 'hizi', 'sobjɑ', 'zæskuk', 'zumzo', 'sæzvu', 'zæzɡɑɡ', 'siʒ', 'missum', 'ʃusi', 'fiznɑ', 'ɡisθɑh', 'tizo', 'nævzi', 'ʒɑŋvæʃ', 'fæbðɑj', 'kɑðæ', 'fæ'],
			gloss: ['surprise', 'sell', 'mouth', 'they (fem)', 'flame', 'woman', 'midday ', 'llama', 'moss', 'scream', 'we', 'grey', 'jaw', 'rain', 'lentil', 'flesh', 'wife', 'most', 'damp', 'banana', 'saliva', 'bend', 'two', 'duck', 'baby', 'shark', 'cashew', 'claw', 'island', 'fight', 'you (dual)', 'eyelid', 'ear', 'forehead', 'insect', 'who', 'brother', 'downhill', 'father', 'skin'],
			ruleTxt: " word-final ashibilation of alveolar fricatives"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h x ɣ m n ŋ r l w i ɛ o u ə a ",
			ruleType: "Alternating",
			poi: "ç ʝ x ɣ ",
			UR: ['ɣixfəb', 'xiɣ', 'mɛðliɣ', 'ʔixtɛ', 'ɣixi', 'wix', 'dolʃix', 'hiɣwax', 'ðɛrθix', 'ʒiɣvaʔ', 'd͡ʒiðix', 'tix', 'sixʔaɣ', 'ɣiɣi', 'xiɣŋa', 'ɣaɣɣix', 'kixəv', 'ɣiɣbə', 'xiɣuɣ', 'mixʃal', 'təx', 'ðiðɣo', 'xəlɣox', 'nuɡɣob', 'ɣo', 'ɣolax', 'θimbax', 'xox', 'ɣɛd͡ʒɣə', 'ləðɛɣ', 'ɣəkib', 'ʒaɣd͡ʒɛz', 'tərɣad͡ʒ', 'ɣorʃo', 'məɣo', 'ɣəri', 'bu', 'hab', 'ʔikɛf', 'halsi'],
			SR: ['ɣiçfəb', 'xiʝ', 'mɛðliʝ', 'ʔiçtɛ', 'ɣiçi', 'wiç', 'dolʃiç', 'hiʝwax', 'ðɛrθiç', 'ʒiʝvaʔ', 'd͡ʒiðiç', 'tiç', 'siçʔaɣ', 'ɣiʝi', 'xiʝŋa', 'ɣaɣɣiç', 'kiçəv', 'ɣiʝbə', 'xiʝuɣ', 'miçʃal', 'təx', 'ðiðɣo', 'xəlɣox', 'nuɡɣob', 'ɣo', 'ɣolax', 'θimbax', 'xox', 'ɣɛd͡ʒɣə', 'ləðɛɣ', 'ɣəkib', 'ʒaɣd͡ʒɛz', 'tərɣad͡ʒ', 'ɣorʃo', 'məɣo', 'ɣəri', 'bu', 'hab', 'ʔikɛf', 'halsi'],
			gloss: ['two', 'eyebrow', 'feed', 'berry', 'enter', 'many', 'spicy', 'sibling', 'smooth', 'jump', 'knuckle', 'argue', 'saliva', 'midday ', 'uphill', 'young', 'coriander', 'wife', 'cod', 'build', 'they (dual)', 'lentil', 'we (dual)', 'zucchini', 'you (dual)', 'camel', 'hyena', 'dry', 'torso', 'finish', 'forest', 'those', 'cloud', 'like', 'ancestor', 'onion', 'smoke', 'snake', 'die', 'lip'],
			ruleTxt: " palatalization of velar fricatives after high front vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g ʔ t͡ʃ f θ s ʃ h m n ŋ r l w j i ɪ e ɛ ɔ o ʊ u ə a ",
			ruleType: "Neutralizing",
			poi: "i ɪ e ɛ o ɔ u ʊ ə ",
			UR: ['wɔ', 't͡ʃanle', 'sɛɡlo', 're', 'sɛ', 'se', 'pirse', 'ŋəɡo', 'lɛhse', 'ʃəɡŋɔ', 'toɡme', 'jɛ', 'rɔ', 'jəɡre', 'ʔokʃɛ', 'ŋʊpe', 'nɔft͡ʃə', 'mə', 'fɔɡŋə', 'ɡeɡjə', 't͡ʃʊwɛs', 'rʊjɔh', 'peɡmer', 'niɡŋɔʃ', 'ʔəsta', 'semʔɛj', 'nolɔp', 'ɡoɡjɪw', 'ʃɛmθer', 'ʃɛʃɔl', 'wes', 'pɛɡŋor', 'jeŋ', 'ɡuʔɛp', 'sɔttɛn', 'ʃɔŋpel', 'θifʃʊ', 'hɪlɡu', 'nanpu', 'wʊt͡ʃʊl'],
			SR: ['wʊ', 't͡ʃanli', 'sɛɡlu', 'ri', 'sɪ', 'si', 'pirsi', 'ŋəɡu', 'lɛhsi', 'ʃəɡŋʊ', 'toɡmi', 'jɪ', 'rʊ', 'jəɡri', 'ʔokʃɪ', 'ŋʊpi', 'nɔft͡ʃə', 'mə', 'fɔɡŋə', 'ɡeɡjə', 't͡ʃʊwɛs', 'rʊjɔh', 'peɡmer', 'niɡŋɔʃ', 'ʔəsta', 'semʔɛj', 'nolɔp', 'ɡoɡjɪw', 'ʃɛmθer', 'ʃɛʃɔl', 'wes', 'pɛɡŋor', 'jeŋ', 'ɡuʔɛp', 'sɔttɛn', 'ʃɔŋpel', 'θifʃʊ', 'hɪlɡu', 'nanpu', 'wʊt͡ʃʊl'],
			gloss: ['eyelid', 'adapt', 'make', 'evil', 'snake', 'white', 'family', 'oats', 'cold', 'watermelon', 'blackberry', 'you (pl)', 'want', 'sister', 'waterfall', 'pay', 'nostril', 'know', 'all', 'chest', 'lunch', 'liver', 'enjoy', 'new', 'rain', 'pink', 'acorn', 'cinnamon', 'buttocks', 'wine', 'eel', 'wolf', 'listen', 'dry', 'friend', 'where', 'catch', 'dove', 'sleep', 'begin'],
			ruleTxt: " word-final raising of mid vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g t͡ʃ f θ s ʃ x m n ŋ r w i ɪ e ɛ ɔ o ʊ u ə a ",
			ruleType: "Mixed",
			poi: "i ɪ ɨ ",
			UR: ['ʃi', 'rɪʃin', 't͡ʃinxit͡ʃ', 'tɪθʃin', 't͡ʃiʃit͡ʃ', 't͡ʃiɡmɔ', 'ŋikʃin', 'ɡaft͡ʃi', 'sɪʃiw', 't͡ʃiŋt͡ʃɔ', 'ʃikxʊ', 't͡ʃi', 't͡ʃisʃʊ', 'ʃiɡnuɡ', 't͡ʃifpi', 't͡ʃixfɪm', 'ʃɪr', 'niθt͡ʃɪn', 'ʃɪʃ', 'ʃɪɡŋɛs', 'nʊɡriʃ', 'xi', 'fɪ', 'nʊnniw', 'woki', 'pimsɪ', 'nɪsɪθ', 'wi', 'nɪθi', 'tɔxɪ', 'nɪkak', 'mim', 'pufpi', 'ɡɪɡnɪ', 'nɪsew', 'wəki', 'θɛŋa', 'ʃɛ', 'xɛfek', 'kɛpku'],
			SR: ['ʃɨ', 'rɪʃɨn', 't͡ʃɨnxit͡ʃ', 'tɪθʃɨn', 't͡ʃɨʃɨt͡ʃ', 't͡ʃɨɡmɔ', 'ŋikʃɨn', 'ɡaft͡ʃɨ', 'sɪʃɨw', 't͡ʃɨŋt͡ʃɔ', 'ʃɨkxʊ', 't͡ʃɨ', 't͡ʃɨsʃʊ', 'ʃɨɡnuɡ', 't͡ʃɨfpi', 't͡ʃɨxfɪm', 'ʃɪr', 'niθt͡ʃɪn', 'ʃɪʃ', 'ʃɪɡŋɛs', 'nʊɡriʃ', 'xi', 'fɪ', 'nʊnniw', 'woki', 'pimsɪ', 'nɪsɪθ', 'wi', 'nɪθi', 'tɔxɪ', 'nɪkak', 'mim', 'pufpi', 'ɡɪɡnɪ', 'nɪsew', 'wəki', 'θɛŋa', 'ʃɛ', 'xɛfek', 'kɛpku'],
			gloss: ['waterfall', 'uphill', 'woman', 'nostril', 'there', 'watermelon', 'child', 'grey', 'meal', 'many', 'dim', 'repeat', 'coyote', 'continue', 'night', 'brown', 'herring', 'hear', 'green', 'fire', 'drink', 'tell', 'juice', 'young', 'group', 'eyelash', 'gecko', 'chest', 'honey', 'warm', 'expect', 'tongue', 'feather', 'acorn', 'you (pl)', 'they (masc)', 'potato', 'blood', 'run', 'lose'],
			ruleTxt: " retraction of high front vowels after postalveolars"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z h x ɣ m n ŋ r w j i u a ",
			ruleType: "Alternating",
			poi: "ç ʝ x ɣ ",
			UR: ['xixθuj', 'ŋixfu', 'marɣix', 'ʔiɣnat', 'ɣanɣiɣ', 'six', 'naŋtix', 'zuhpiɣ', 'ɣiɣraw', 'fiɣi', 'haɣiɣ', 'ɣudŋiɣ', 'ŋuðɣix', 'rixxi', 'zixʔux', 'xixu', 'ŋiɣut', 'viddiɣ', 'jaɣix', 'rimtix', 'ɣaxi', 'ɣadu', 'xuxi', 'ŋivŋuɣ', 'xidra', 'xanaɣ', 'ɣazrax', 'xaɣ', 'baɣ', 'ʔihxi', 'saɣi', 'xivza', 'maŋxuɣ', 'xajup', 'ŋux', 'ŋitxux', 'wiʔʔu', 'ʔubŋa', 'wi', 'kuftuk'],
			SR: ['xiçθuj', 'ŋiçfu', 'marɣiç', 'ʔiʝnat', 'ɣanɣiʝ', 'siç', 'naŋtiç', 'zuhpiʝ', 'ɣiʝraw', 'fiʝi', 'haɣiʝ', 'ɣudŋiʝ', 'ŋuðɣiç', 'riçxi', 'ziçʔux', 'xiçu', 'ŋiʝut', 'viddiʝ', 'jaɣiç', 'rimtiç', 'ɣaxi', 'ɣadu', 'xuxi', 'ŋivŋuɣ', 'xidra', 'xanaɣ', 'ɣazrax', 'xaɣ', 'baɣ', 'ʔihxi', 'saɣi', 'xivza', 'maŋxuɣ', 'xajup', 'ŋux', 'ŋitxux', 'wiʔʔu', 'ʔubŋa', 'wi', 'kuftuk'],
			gloss: ['look', 'fox', 'evil', 'we (incl)', 'punch', 'mouse', 'trade', 'parent', 'island', 'parrot', 'leopard', 'throat', 'yellow', 'love', 'they (masc)', 'group', 'you (dual)', 'wet', 'sister', 'blood', 'salmon', 'mosquito', 'two', 'boil', 'blue', 'stand', 'he/she', 'fruit', 'nephew', 'speak', 'head', 'push', 'seed', 'think', 'much', 'become', 'flame', 'star', 'tree bark', 'garlic'],
			ruleTxt: " palatalization of velar fricatives after front vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h n ŋ r w j i ɪ e ɛ ɔ o ʊ u ə æ ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ ɑ o ɔ u ʊ ə i̥ ɪ̥ e̥ ɛ̥ æ̥ ɑ̥ o̥ ɔ̥ u̥ ʊ̥ ə̥ ",
			UR: ['ʃʊffo', 'vuft͡ʃɔ', 'rɪʃə', 'θunfɑ', 'veŋʃɪ', 'pe', 'hæsɛ', 'pʊfo', 'fo', 'jɑt͡ʃʃə', 'wukə', 'ræhpe', 'vorkɪ', 'kæpsɪ', 'hʊʃho', 'so', 'væstɑ', 'wɛskə', 'pæt͡ʃt͡ʃi', 'θeθu', 'd͡ʒɪphʊ', 'rukt͡ʃi', 'd͡ʒunpɔ', 'jofkæ', 'nintʊz', 'vuθpoʒ', 'kɔt͡ʃɪŋ', 'ræʃt͡ʃop', 't͡ʃʊrʒɔɡ', 'dəkes', 'bæpkoɡ', 't͡ʃɛpuθ', 't͡ʃibd͡ʒʊ', 'wæʒu', 'tiŋðə', 'vɔ', 't͡ʃɪzjɔ', 'no', 'ɡɪ', 'wiðvo'],
			SR: ['ʃʊffo̥', 'vuft͡ʃɔ̥', 'rɪʃə̥', 'θunfɑ̥', 'veŋʃɪ̥', 'pe̥', 'hæsɛ̥', 'pʊfo̥', 'fo̥', 'jɑt͡ʃʃə̥', 'wukə̥', 'ræhpe̥', 'vorkɪ̥', 'kæpsɪ̥', 'hʊʃho̥', 'so̥', 'væstɑ̥', 'wɛskə̥', 'pæt͡ʃt͡ʃi̥', 'θeθu̥', 'd͡ʒɪphʊ̥', 'rukt͡ʃi̥', 'd͡ʒunpɔ̥', 'jofkæ̥', 'nintʊz', 'vuθpoʒ', 'kɔt͡ʃɪŋ', 'ræʃt͡ʃop', 't͡ʃʊrʒɔɡ', 'dəkes', 'bæpkoɡ', 't͡ʃɛpuθ', 't͡ʃibd͡ʒʊ', 'wæʒu', 'tiŋðə', 'vɔ', 't͡ʃɪzjɔ', 'no', 'ɡɪ', 'wiðvo'],
			gloss: ['west', 'we (excl)', 'head', 'what', 'day', 'feast', 'call', 'chin', 'moon', 'put', 'rain', 'sesame', 'cod', 'none', 'tribe', 'laugh', 'flame', 'zucchini', 'tooth', 'go', 'awaken', 'hesitate', 'buy', 'urine', 'abdomen', 'spicy', 'butterfly', 'taste', 'each', 'mud', 'write', 'adore', 'tree', 'dry', 'nostril', 'trade', 'onion', 'forefinger', 'bumpy', 'alligator'],
			ruleTxt: " word-final vowel devoicing after voiceless consonants"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ x ɣ m n ŋ r l w j i ɪ e ɛ ɔ o ʊ u ə a ",
			ruleType: "Neutralizing",
			poi: "s z ʃ ʒ ",
			UR: ['siz', 'ɡʊpəs', 'ʔʊdlɛs', 'xilʊs', 'sɛbŋaz', 'sɛz', 'ʃaz', 'musez', 'saves', 'sɪŋzez', 'zɔʒʒeθ', 'zʊmtɛɡ', 'zɪðdi', 'ʃəzzeʔ', 'zoɡzof', 'zʊ', 'xɔssə', 'zɪzze', 'zɔfkɛʔ', 'ziŋvɛ', 'lɛsɪ', 'sɛʒnab', 'se', 'ɡaʔsʊx', 'ɣosθʊ', 'bazzi', 'seɡbo', 'sɔnto', 'tʊzda', 'ʔoɣzif', 'mizɡu', 'ziŋʃað', 'zidɣə', 'bɔŋsʊ', 'sunnov', 'sɔlwu', 'vɛnvɔ', 'ʔuʃʔit', 'rɪɡɣə', 'vexʔiv'],
			SR: ['ʃiʒ', 'ɡʊpəʃ', 'ʔʊdlɛʃ', 'xilʊʃ', 'ʃɛbŋaʒ', 'ʃɛʒ', 'ʃaʒ', 'muʃeʒ', 'ʃaveʃ', 'ʃɪŋʒeʒ', 'ʒɔʒʒeθ', 'ʒʊmtɛɡ', 'ʒɪðdi', 'ʃəʒʒeʔ', 'ʒoɡʒof', 'ʒʊ', 'xɔʃʃə', 'ʒɪʒʒe', 'ʒɔfkɛʔ', 'ʒiŋvɛ', 'lɛʃɪ', 'ʃɛʒnab', 'ʃe', 'ɡaʔʃʊx', 'ɣoʃθʊ', 'baʒʒi', 'ʃeɡbo', 'ʃɔnto', 'tʊʒda', 'ʔoɣʒif', 'miʒɡu', 'ʒiŋʃað', 'ʒidɣə', 'bɔŋʃʊ', 'ʃunnov', 'ʃɔlwu', 'vɛnvɔ', 'ʔuʃʔit', 'rɪɡɣə', 'vexʔiv'],
			gloss: ['survive', 'swim', 'nowhere', 'squirrel', 'insect', 'fog', 'hundred', 'eat', 'frog', 'ox', 'kneel', 'evening', 'pumpkin', 'black', 'grey', 'torso', 'sparrow', 'sleep', 'flame', 'red', 'blackberry', 'know', 'waterfall', 'ancestor', 'burn', 'nose', 'leaf', 'son', 'path', 'leave', 'foot', 'downhill', 'preach', 'bone', 'jaw', 'wish', 'sibling', 'most', 'eel', 'you (dual)'],
			ruleTxt: " ashibilation of alveolar fricatives in codas"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f θ s ʃ h m n ŋ r l j i ɪ e ɛ ɔ o ʊ u ə æ ɑ ",
			ruleType: "Mixed",
			poi: "i ɪ ɨ ",
			UR: ['kidɡi', 'kiʔ', 'ɡimtiɡ', 'ʃibɡiŋ', 'nɪdɡi', 'kikɪ', 'puskih', 'ɡidŋi', 'sɪmɡit', 'ŋifoʃ', 'bidɡis', 'ŋij', 'midŋi', 'tedŋi', 'ŋidlɪ', 'piɡi', 'nɔbŋɪl', 'ɡɪr', 'ŋeɡɪ', 'ɡɪf', 'kehtis', 'ʔiju', 'lihɑŋ', 'niʔ', 'sɪtʃi', 'lɪhʔɪ', 'hɪŋsi', 'ŋemʔɪ', 'ʃɪ', 'bɪsem', 'ʔeθʔil', 'miŋŋɑ', 'mɪbi', 'niddæl', 'bɑfθi', 'lisfi', 'rəbrə', 'leɡɡɛs', 'sɛjɔ', 'dʊk'],
			SR: ['kɨdɡɨ', 'kɨʔ', 'ɡɨmtiɡ', 'ʃibɡɨŋ', 'nɪdɡɨ', 'kɨkɪ', 'puskɨh', 'ɡɨdŋɨ', 'sɪmɡɨt', 'ŋɨfoʃ', 'bidɡɨs', 'ŋɨj', 'midŋɨ', 'tedŋɨ', 'ŋɨdlɪ', 'piɡɨ', 'nɔbŋɪl', 'ɡɪr', 'ŋeɡɪ', 'ɡɪf', 'kehtis', 'ʔiju', 'lihɑŋ', 'niʔ', 'sɪtʃi', 'lɪhʔɪ', 'hɪŋsi', 'ŋemʔɪ', 'ʃɪ', 'bɪsem', 'ʔeθʔil', 'miŋŋɑ', 'mɪbi', 'niddæl', 'bɑfθi', 'lisfi', 'rəbrə', 'leɡɡɛs', 'sɛjɔ', 'dʊk'],
			gloss: ['feather', 'mother', 'horn', 'scream', 'sell', 'every', 'cat', 'sleep', 'mango', 'nose', 'stone', 'wife', 'person', 'go', 'forget', 'neck', 'clear', 'allow', 'few', 'blue', 'niece', 'those', 'they (neut)', 'forest', 'mouth', 'hot', 'rough', 'feel', 'new', 'adapt', 'evil', 'gecko', 'knuckle', 'ant', 'flame', 'pretend', 'son', 'mouse', 'possess', 'tree bark'],
			ruleTxt: " retraction of high front vowels after velars"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f θ s ʃ x m n ŋ r l w j i e ɛ ɔ æ a ɑ ",
			ruleType: "Mixed",
			poi: "ɛ æ a ɑ ʌ ə ",
			UR: ['kɛʃt͡ʃa', 'jæbdɑ', 'fæ', 'xat͡ʃʃæ', 'simd͡ʒɑ', 'rɑkt͡ʃæ', 'nadæ', 'lɑ', 'jæ', 'pa', 'lɑt͡ʃʃæ', 'nækæ', 'waxtɑ', 'fæd͡ʒbɑ', 't͡ʃɑd͡ʒa', 'ra', 'd͡ʒɑ', 'd͡ʒiffæ', 'siθpɑ', 'mæɡrɑ', 'pɑdmɔ', 'xærnam', 'bam', 'kɑdrɑd', 'mæŋ', 'xɑl', 'tɑn', 'ɡasxax', 'sæɡwɑt͡ʃ', 'mɑθæp', 'baɡbæx', 'ʃɑkθaɡ', 'kɔft͡ʃæθ', 'baxt͡ʃæb', 'jɑkθɛɡ', 'wænt͡ʃɔf', 'ɡɔdd͡ʒɛt', 'dɛpɔn', 'rift͡ʃɔ', 'tɛmbɛ'],
			SR: ['kɛʃt͡ʃə', 'jæbdʌ', 'fɛ', 'xat͡ʃʃɛ', 'simd͡ʒʌ', 'rɑkt͡ʃɛ', 'nadɛ', 'lʌ', 'jɛ', 'pə', 'lɑt͡ʃʃɛ', 'nækɛ', 'waxtʌ', 'fæd͡ʒbʌ', 't͡ʃɑd͡ʒə', 'rə', 'd͡ʒʌ', 'd͡ʒiffɛ', 'siθpʌ', 'mæɡrʌ', 'pɑdmɔ', 'xærnam', 'bam', 'kɑdrɑd', 'mæŋ', 'xɑl', 'tɑn', 'ɡasxax', 'sæɡwɑt͡ʃ', 'mɑθæp', 'baɡbæx', 'ʃɑkθaɡ', 'kɔft͡ʃæθ', 'baxt͡ʃæb', 'jɑkθɛɡ', 'wænt͡ʃɔf', 'ɡɔdd͡ʒɛt', 'dɛpɔn', 'rift͡ʃɔ', 'tɛmbɛ'],
			gloss: ['squirrel', 'arm', 'ear', 'newt', 'realize', 'much', 'destroy', 'grass', 'damp', 'son', 'one', 'fire', 'leave', 'finish', 'bathe', 'preach', 'not', 'dog', 'dinner', 'abdomen', 'vegetable', 'sleep', 'black', 'pretend', 'lie down', 'buy', 'day', 'person', 'lift', 'smooth', 'small', 'lake', 'they (fem)', 'apple', 'red', 'spicy', 'four', 'almond', 'she', 'dislike'],
			ruleTxt: " word-final raising of low vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f θ s ʃ h x m n ŋ r w j i e ɛ u ə a ",
			ruleType: "Neutralizing",
			poi: "p b t d t͡ʃ d͡ʒ k g ",
			UR: ['webwəɡ', 'numd͡ʒib', 'ɡub', 'baddəɡ', 'rəxsud͡ʒ', 'tiɡdɛɡ', 'mɛd', 'ŋənd͡ʒɛɡ', 'd͡ʒɛɡ', 'dətkaɡ', 'ʃəb', 'sebeɡ', 'ɡitxib', 'tedŋad', 'meɡnid͡ʒ', 'd͡ʒaŋned͡ʒ', 'wəd͡ʒud', 'dəd͡ʒ', 'ɡəɡ', 'xumdeɡ', 'bip', 'ɡiθha', 'be', 'derə', 'betax', 'd͡ʒiɡwax', 'beŋbe', 'deɡɡa', 'd͡ʒɛdi', 'hibni', 't͡ʃid͡ʒwut͡ʃ', 'ŋuɡit', 'behθa', 'binə', 'beθpi', 't͡ʃaɡe', 'xuʃθut͡ʃ', 'ŋerɛ', 'kerju', 'rəθe'],
			SR: ['webwək', 'numd͡ʒip', 'ɡup', 'baddək', 'rəxsut͡ʃ', 'tiɡdɛk', 'mɛt', 'ŋənd͡ʒɛk', 'd͡ʒɛk', 'dətkak', 'ʃəp', 'sebek', 'ɡitxip', 'tedŋat', 'meɡnit͡ʃ', 'd͡ʒaŋnet͡ʃ', 'wəd͡ʒut', 'dət͡ʃ', 'ɡək', 'xumdek', 'bip', 'ɡiθha', 'be', 'derə', 'betax', 'd͡ʒiɡwax', 'beŋbe', 'deɡɡa', 'd͡ʒɛdi', 'hibni', 't͡ʃid͡ʒwut͡ʃ', 'ŋuɡit', 'behθa', 'binə', 'beθpi', 't͡ʃaɡe', 'xuʃθut͡ʃ', 'ŋerɛ', 'kerju', 'rəθe'],
			gloss: ['potato', 'saliva', 'make', 'big', 'breakfast', 'think', 'father', 'beach', 'get', 'kitten', 'smell', 'sit', 'they (fem)', 'hand', 'you (sg)', 'salmon', 'north', 'five', 'morning', 'eye', 'melon', 'red', 'it', 'one', 'dove', 'dirt', 'agree', 'fruit bat', 'mouth', 'sun', 'grass', 'ignore', 'daughter', 'fresh', 'nephew', 'woman', 'group', 'we (dual)', 'dry', 'vinegar'],
			ruleTxt: " and in A environment test rule"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f s x m n ŋ r l w j i u a ",
			ruleType: "Mixed",
			poi: "p t k pʰ tʰ kʰ ʔ ",
			UR: ['ɡixfip', 'kit', 'dixsap', 'dat', 'susʔat', 'kabjut', 'runbat', 'waɡɡap', 'wapap', 'ŋuɡnat', 'tarlak', 'ʔumtak', 'nuɡbik', 'ŋaɡdik', 'tufap', 'fudnit', 'paduʔ', 'ʔikaʔ', 'daŋxiʔ', 'piʔ', 'kuwu', 'dukfi', 'paɡbi', 'ʔutfi', 'pusfuj', 'padraŋ', 'ʔiŋti', 'ʔabju', 'pupu', 'paʔki', 'ʔudwi', 'ŋakin', 'tiʔfu', 'panti', 'kaku', 'ʔif', 'nuɡru', 'sadɡad', 'ŋubŋa', 'xili'],
			SR: ['ɡixfipʰ', 'kitʰ', 'dixsapʰ', 'datʰ', 'susʔatʰ', 'kabjutʰ', 'runbatʰ', 'waɡɡapʰ', 'wapapʰ', 'ŋuɡnatʰ', 'tarlakʰ', 'ʔumtakʰ', 'nuɡbikʰ', 'ŋaɡdikʰ', 'tufapʰ', 'fudnitʰ', 'paduʔ', 'ʔikaʔ', 'daŋxiʔ', 'piʔ', 'kuwu', 'dukfi', 'paɡbi', 'ʔutfi', 'pusfuj', 'padraŋ', 'ʔiŋti', 'ʔabju', 'pupu', 'paʔki', 'ʔudwi', 'ŋakin', 'tiʔfu', 'panti', 'kaku', 'ʔif', 'nuɡru', 'sadɡad', 'ŋubŋa', 'xili'],
			gloss: ['wish', 'sun', 'purple', 'some', 'thin', 'banana', 'yellow', 'inland', 'daughter', 'give', 'throat', 'serving', 'night', 'sleep', 'cut', 'where', 'repeat', 'call', 'soup', 'horn', 'there', 'he/she/it', 'build', 'man', 'pebble', 'warm', 'kitten', 'wood', 'raccoon ', 'we (incl)', 'grape', 'believe', 'old', 'ignore', 'tooth', 'eyelash', 'mother', 'leg', 'carrot', 'green'],
			ruleTxt: " word-final aspiration of voiceless stops"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h x ɣ m n ŋ r l w j i e o æ ɑ ",
			ruleType: "Alternating",
			poi: "ç ʝ x ɣ ",
			UR: ['ɣænxiɣ', 'biɣɣɑh', 'θixʃoh', 'xiɣmeɣ', 'tixew', 'ðixo', 'vivlix', 'serɡix', 'bæmfix', 'siɣreŋ', 'hixxæ', 'xɑɣðix', 'ɣerʃix', 'wiɣŋæ', 'ɣɑðɡiɣ', 'vixθe', 'nixfæɣ', 'ɣiɣriʃ', 'xiɣmen', 'firɣiɣ', 'ɣænxɑt͡ʃ', 'xorni', 'θeɣ', 'dæɣmi', 'ɣoði', 'ɣox', 'xɑtxep', 'feðɣoð', 'xiftes', 'xemd͡ʒe', 'ɡovɣæ', 'tɑɣɑ', 'θæɣe', 'ɣemxo', 'ɣirho', 'xivded͡ʒ', 'tobno', 'pɑθiθ', 'ðemrih', 'jerθi'],
			SR: ['ɣænxiʝ', 'biʝɣɑh', 'θiçʃoh', 'xiʝmeɣ', 'tiçew', 'ðiço', 'vivliç', 'serɡiç', 'bæmfiç', 'siʝreŋ', 'hiçxæ', 'xɑɣðiç', 'ɣerʃiç', 'wiʝŋæ', 'ɣɑðɡiʝ', 'viçθe', 'niçfæɣ', 'ɣiʝriʃ', 'xiʝmen', 'firɣiʝ', 'ɣænxɑt͡ʃ', 'xorni', 'θeɣ', 'dæɣmi', 'ɣoði', 'ɣox', 'xɑtxep', 'feðɣoð', 'xiftes', 'xemd͡ʒe', 'ɡovɣæ', 'tɑɣɑ', 'θæɣe', 'ɣemxo', 'ɣirho', 'xivded͡ʒ', 'tobno', 'pɑθiθ', 'ðemrih', 'jerθi'],
			gloss: ['few', 'survive', 'baby', 'pinch', 'rye', 'nephew', 'how', 'earlobe', 'cat', 'thigh', 'newt', 'bile', 'evil', 'beer', 'two', 'jaw', 'tongue', 'mother', 'arm', 'clear', 'young', 'grape', 'person', 'cucumber', 'insect', 'tomato', 'chicken', 'feather', 'boil', 'teach', 'meal', 'almond', 'possess', 'blue/green', 'like', 'fail', 'fish', 'he/she/it', 'clan', 'hear'],
			ruleTxt: " palatalization of velar fricatives after high front vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ h m n ŋ r l j i ɪ e ɛ ɔ o ʊ u a ",
			ruleType: "Mixed",
			poi: "i ɪ ɨ ",
			UR: ['zuɡi', 'ŋiptɪ', 'ŋi', 'fiθkiʔ', 'kiʃtɪp', 'kifʃʊ', 'ɡipsʊʃ', 'ʒibɡiθ', 'ŋidiʒ', 'kis', 'rɔki', 'ɡifθɪ', 'ŋibdɪ', 'ʃɛhki', 'zɛɡi', 'kiŋʒi', 'ŋɔbŋɪp', 'ɡɪzbɪɡ', 'ɡɪt', 'ɡɪʔkɛh', 'ʒiʃpa', 'piʒmo', 'ɡeɡvɪ', 'mivðos', 'fʊsɪ', 'misɛb', 'ʒi', 'ðɪtsɪz', 'tintɪɡ', 'nɪfʔiʃ', 'θifʔɪ', 'jobzɪ', 'mɪtʊr', 'nɛndɪθ', 'vɪ', 'ðubiɡ', 'ʒɛnoʔ', 'fɛmhop', 'ja', 'tazjɛ'],
			SR: ['zuɡɨ', 'ŋɨptɪ', 'ŋɨ', 'fiθkɨʔ', 'kɨʃtɪp', 'kɨfʃʊ', 'ɡɨpsʊʃ', 'ʒibɡɨθ', 'ŋɨdiʒ', 'kɨs', 'rɔkɨ', 'ɡɨfθɪ', 'ŋɨbdɪ', 'ʃɛhkɨ', 'zɛɡɨ', 'kɨŋʒi', 'ŋɔbŋɪp', 'ɡɪzbɪɡ', 'ɡɪt', 'ɡɪʔkɛh', 'ʒiʃpa', 'piʒmo', 'ɡeɡvɪ', 'mivðos', 'fʊsɪ', 'misɛb', 'ʒi', 'ðɪtsɪz', 'tintɪɡ', 'nɪfʔiʃ', 'θifʔɪ', 'jobzɪ', 'mɪtʊr', 'nɛndɪθ', 'vɪ', 'ðubiɡ', 'ʒɛnoʔ', 'fɛmhop', 'ja', 'tazjɛ'],
			gloss: ['juice', 'bright', 'fist', 'forehead', 'buy', 'rice', 'sun', 'daughter', 'valley', 'bull', 'who', 'decide', 'mountain', 'hot', 'ask', 'hug', 'die', 'cook', 'toe', 'heart', 'yell', 'we (excl)', 'every', 'you (dual)', 'lip', 'tiger', 'forget', 'gourd', 'skin', 'thick', 'ice', 'old', 'dove', 'tomato', 'gecko', 'serving', 'arrive', 'raccoon ', 'broken', 'four'],
			ruleTxt: " retraction of high front vowels after velars"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ θ s ʃ h m n j i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ə i̥ ɪ̥ e̥ ɛ̥ æ̥ ḁ ɑ̥ o̥ ɔ̥ u̥ ʊ̥ ə̥ ",
			UR: ['tuθɑ', 'dɑʃu', 'kiθkɔ', 'sɪʃhæ', 'nɑhpi', 't͡ʃu', 'jɛnθu', 'θomt͡ʃʊ', 'pɪppe', 'nanʃo', 'kə', 'ɡettɛ', 'ʃæmsʊ', 'dʊʃto', 'kiθt͡ʃu', 'd͡ʒahpe', 'nʊmkɑ', 'pʊ', 'ɡəhkɪ', 'semθo', 'tunsʊ', 'dɪpo', 'bukte', 'jikho', 'θəs', 'θɔd͡ʒɔm', 'jippoθ', 'ɡiθsʊs', 'sebbɪk', 'huntij', 't͡ʃɑst͡ʃaj', 'pesiɡ', 'jɪ', 'ʃɑbdu', 'θinno', 'tima', 'jɛ', 'hid͡ʒɪ', 'kæbmʊ', 'diɡju'],
			SR: ['tuθɑ̥', 'dɑʃu̥', 'kiθkɔ̥', 'sɪʃhæ̥', 'nɑhpi̥', 't͡ʃu̥', 'jɛnθu̥', 'θomt͡ʃʊ̥', 'pɪppe̥', 'nanʃo̥', 'kə̥', 'ɡettɛ̥', 'ʃæmsʊ̥', 'dʊʃto̥', 'kiθt͡ʃu̥', 'd͡ʒahpe̥', 'nʊmkɑ̥', 'pʊ̥', 'ɡəhkɪ̥', 'semθo̥', 'tunsʊ̥', 'dɪpo̥', 'bukte̥', 'jikho̥', 'θəs', 'θɔd͡ʒɔm', 'jippoθ', 'ɡiθsʊs', 'sebbɪk', 'huntij', 't͡ʃɑst͡ʃaj', 'pesiɡ', 'jɪ', 'ʃɑbdu', 'θinno', 'tima', 'jɛ', 'hid͡ʒɪ', 'kæbmʊ', 'diɡju'],
			gloss: ['cook', 'camel', 'water', 'eyebrow', 'brown', 'every', 'possum', 'flesh', 'torso', 'gecko', 'bad', 'hair', 'sugar', 'wife', 'moon', 'pond', 'elbow', 'green', 'study', 'empty', 'go', 'decide', 'much', 'who', 'jump', 'honey', 'get', 'lift', 'prevent', 'continue', 'nobody', 'brother', 'eel', 'rough', 'coyote', 'neck', 'leopard', 'breathe', 'parrot', 'clan'],
			ruleTxt: " word-final vowel devoicing after voiceless consonants"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h x ɣ m n ŋ r w i e ɛ ɔ o æ ɑ ",
			ruleType: "Neutralizing",
			poi: "s z ʃ ʒ ",
			UR: ['kemðɑz', 'ɡɑrwis', 'ɡozʒes', 't͡ʃɔd͡ʒzez', 'zɛrzɛs', 'særsis', 'mɑʃsiz', 'poz', 'zoŋkoz', 'sɑɡd͡ʒez', 'sinɛz', 'sɑŋfes', 'zindiz', 'zos', 'sɔs', 'wɛniz', 'ʃɑθkɛz', 'zopt͡ʃɔz', 'sæs', 'bɛt͡ʃpos', 'sænxɛ', 'zenɛ', 'zæðɣɛ', 'zɔ', 'sɔɡe', 'wɔmzi', 'zɛrsɑ', 'semzɛ', 'd͡ʒerzo', 'zænɛx', 'hemzɔd͡ʒ', 'ʃɔsi', 'sɑssɑ', 'zektɔr', 'zæræ', 'xæbze', 'ŋɛθpev', 'rɛhɛr', 'wɛ', 'ned͡ʒ'],
			SR: ['kemðɑʒ', 'ɡɑrwiʃ', 'ɡozʒeʃ', 't͡ʃɔd͡ʒzeʒ', 'zɛrzɛʃ', 'særsiʃ', 'mɑʃsiʒ', 'poʒ', 'zoŋkoʒ', 'sɑɡd͡ʒeʒ', 'sinɛʒ', 'sɑŋfeʃ', 'zindiʒ', 'zoʃ', 'sɔʃ', 'wɛniʒ', 'ʃɑθkɛʒ', 'zopt͡ʃɔʒ', 'sæʃ', 'bɛt͡ʃpoʃ', 'sænxɛ', 'zenɛ', 'zæðɣɛ', 'zɔ', 'sɔɡe', 'wɔmzi', 'zɛrsɑ', 'semzɛ', 'd͡ʒerzo', 'zænɛx', 'hemzɔd͡ʒ', 'ʃɔsi', 'sɑssɑ', 'zektɔr', 'zæræ', 'xæbze', 'ŋɛθpev', 'rɛhɛr', 'wɛ', 'ned͡ʒ'],
			gloss: ['resist', 'coyote', 'know', 'ice', 'agree', 'possess', 'he', 'say', 'clan', 'broken', 'hair', 'pink', 'road', 'big', 'ash', 'chest', 'cucumber', 'oats', 'grass', 'rhinoceros', 'sand', 'blackberry', 'snore', 'vegetable', 'alligator', 'desert', 'south', 'kill', 'ear', 'tooth', 'survive', 'face', 'wet', 'eyebrow', 'clear', 'old', 'sit', 'enjoy', 'green', 'bean'],
			ruleTxt: " word-final ashibilation of alveolar fricatives"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z h x ɣ m n ŋ r j i ɛ o u æ a ɑ ",
			ruleType: "Mixed",
			poi: "ɛ æ a ɑ ʌ ə ",
			UR: ['tinka', 'xɑmæ', 'bæmpæ', 'vɑvŋa', 'kɑ', 'd͡ʒɑssɑ', 'ðast͡ʃa', 'ŋohhɑ', 'θud͡ʒɣa', 'ræ', 'd͡ʒæθhɑ', 'huŋhæ', 'ŋaɣða', 'ðævda', 'zæɣŋɑ', 'ðɑhɑ', 'hɛfθæ', 't͡ʃɛxɑ', 'xabnæ', 'xa', 'ŋɑd͡ʒd͡ʒu', 'ŋaɡd͡ʒɛ', 'ɡæpæb', 'ɡad͡ʒbu', 'jaxxo', 'xamtar', 'huskaɣ', 'panzæɡ', 'ɣɛŋθɑp', 'ŋæfax', 'dɑh', 'hætak', 'tasæɣ', 'razɑr', 'ɣæt͡ʃθɑɣ', 'ðæd͡ʒɣæd', 'ðot͡ʃt͡ʃih', 'numduz', 'rɛɣðu', 'fofθo'],
			SR: ['tinkə', 'xɑmɛ', 'bæmpɛ', 'vɑvŋə', 'kʌ', 'd͡ʒɑssʌ', 'ðast͡ʃə', 'ŋohhʌ', 'θud͡ʒɣə', 'rɛ', 'd͡ʒæθhʌ', 'huŋhɛ', 'ŋaɣðə', 'ðævdə', 'zæɣŋʌ', 'ðɑhʌ', 'hɛfθɛ', 't͡ʃɛxʌ', 'xabnɛ', 'xə', 'ŋɑd͡ʒd͡ʒu', 'ŋaɡd͡ʒɛ', 'ɡæpæb', 'ɡad͡ʒbu', 'jaxxo', 'xamtar', 'huskaɣ', 'panzæɡ', 'ɣɛŋθɑp', 'ŋæfax', 'dɑh', 'hætak', 'tasæɣ', 'razɑr', 'ɣæt͡ʃθɑɣ', 'ðæd͡ʒɣæd', 'ðot͡ʃt͡ʃih', 'numduz', 'rɛɣðu', 'fofθo'],
			gloss: ['ten', 'wish', 'beaver', 'discover', 'heart', 'wet', 'daughter', 'proceed', 'star', 'pond', 'she', 'that', 'you (dual)', 'carry', 'forest', 'ketchup', 'bull', 'evening', 'work', 'pebble', 'fresh', 'come', 'improve', 'bake', 'mother', 'know', 'when', 'potato', 'brother', 'spicy', 'direction', 'owl', 'wife', 'nephew', 'eyelash', 'good', 'tiger', 'claw', 'person', 'most'],
			ruleTxt: " word-final raising of low vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ h x ɣ m n l w j i e ɛ ɔ o a ",
			ruleType: "Mixed",
			poi: "p ɸ t s k x ʔ ",
			UR: ['xapɛp', 'tit', 'jɛnʔit', 'zeɡjak', 'dɔvnek', 'piʃkak', 'vonɡɔp', 'jɔnhɛt', 'xepta', 'ʔekʔa', 'tatsa', 'ɡepko', 'nɔkpɔʔ', 'jikʔo', 'topsɔʃ', 'θappiʔ', 'zɔʔʃɛʔ', 'xinhɔʔ', 'ɡeʔpoj', 'voʔʔið', 'ka', 'kiɡza', 'piptoð', 'teði', 'tamθa', 'ʔaðʒo', 'ʔalbe', 'popez', 'ʔiʃom', 'pimtos', 'talki', 'tavos', 'kilti', 'tɛlfɔl', 'lɛlʔe', 'ʔɔʔ', 'θɔ', 'ɡelvɔx', 'howɔ', 'zahxɔθ'],
			SR: ['xapɛɸ', 'tis', 'jɛnʔis', 'zeɡjax', 'dɔvnex', 'piʃkax', 'vonɡɔɸ', 'jɔnhɛs', 'xeɸta', 'ʔexʔa', 'tassa', 'ɡeɸko', 'nɔxpɔʔ', 'jixʔo', 'toɸsɔʃ', 'θaɸpiʔ', 'zɔʔʃɛʔ', 'xinhɔʔ', 'ɡeʔpoj', 'voʔʔið', 'ka', 'kiɡza', 'piɸtoð', 'teði', 'tamθa', 'ʔaðʒo', 'ʔalbe', 'popez', 'ʔiʃom', 'pimtos', 'talki', 'tavos', 'kilti', 'tɛlfɔl', 'lɛlʔe', 'ʔɔʔ', 'θɔ', 'ɡelvɔx', 'howɔ', 'zahxɔθ'],
			gloss: ['threaten', 'ash', 'banana', 'depend on', 'direction', 'watermelon', 'saliva', 'they (masc)', 'buy', 'good', 'fresh', 'south', 'clear', 'raspberry', 'not', 'day', 'preach', 'smooth', 'then', 'breakfast', 'feed', 'feather', 'acquire', 'write', 'small', 'chin', 'eyelash', 'it', 'rye', 'milk', 'tree', 'woman', 'become', 'we (incl)', 'damp', 'rain', 'forehead', 'like', 'wife', 'decide'],
			ruleTxt: " spirantization of voiceless stops in codas"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z h x ɣ m n ŋ w i u ə a ",
			ruleType: "Alternating",
			poi: "s z ʃ ʒ ",
			UR: ['xaziz', 'səz', 'hazəz', 'kukəs', 'sis', 'puz', 'zus', 'maz', 'zəzəs', 'həɡnəz', 'fəzut͡ʃ', 'ŋəzzip', 'zuŋθə', 'zət͡ʃu', 'siðbu', 'bəθsiw', 'mizzut', 'sazɡa', 'timzub', 'su', 'zəbi', 'səŋ', 'zu', 'zapsa', 'zə', 'saxxəx', 'ðiðza', 'sumza', 'buzzəd͡ʒ', 'zaɣim', 'samnu', 'səzzi', 'θastib', 'sinmi', 'zəza', 'səfi', 'bəfit͡ʃ', 'pankud', 'huŋθuk', 'ɣaɡŋə'],
			SR: ['xaʒiʒ', 'ʃəʒ', 'haʒəʒ', 'kukəʃ', 'ʃiʃ', 'puʒ', 'ʒuʃ', 'maʒ', 'ʒəʒəʃ', 'həɡnəʒ', 'fəʒut͡ʃ', 'ŋəʒʒip', 'ʒuŋθə', 'ʒət͡ʃu', 'ʃiðbu', 'bəθʃiw', 'miʒʒut', 'ʃaʒɡa', 'timʒub', 'ʃu', 'ʒəbi', 'ʃəŋ', 'ʒu', 'ʒapʃa', 'ʒə', 'ʃaxxəx', 'ðiðʒa', 'ʃumʒa', 'buʒʒəd͡ʒ', 'ʒaɣim', 'ʃamnu', 'ʃəʒʒi', 'θaʃtib', 'ʃinmi', 'ʒəʒa', 'ʃəfi', 'bəfit͡ʃ', 'pankud', 'huŋθuk', 'ɣaɡŋə'],
			gloss: ['pumpkin', 'blue/green', 'oats', 'talk', 'think', 'feed', 'toe', 'develop', 'throat', 'yellow', 'recline', 'she', 'leaf', 'evil', 'heart', 'sea', 'slide', 'dim', 'all', 'horse', 'parent', 'watch', 'hope', 'peanut', 'coastline', 'we (incl)', 'cut', 'take', 'pink', 'bumpy', 'sister', 'you (pl)', 'feather', 'many', 'lose', 'south', 'smoke', 'sneeze', 'husband', 'cloud'],
			ruleTxt: " ashibilation of alveolar fricatives in codas"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g f θ s ʃ m n ŋ r l w j i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ə i̥ ɪ̥ e̥ ɛ̥ æ̥ ḁ ɑ̥ o̥ ɔ̥ u̥ ʊ̥ ə̥ ",
			UR: ['si', 'θæʃtɔ', 'kæ', 'θiʃku', 'nəskɛ', 'ʃitθe', 'ɡɪlʃɛ', 'sɑpkə', 'rɔfo', 'ŋətpo', 'nupte', 'ɡɔnte', 'pʊpkʊ', 'tʊkθɑ', 'kɛθtə', 'θoʃtɔ', 'nənfə', 'kotθi', 'ʃe', 'pɔmkʊ', 'nufkʊ', 'po', 'kʊfsə', 'fɔ', 'fɑɡjɪk', 'θuʃ', 'kɪk', 'θelok', 'fɔɡwɪ', 'θamʃəp', 'θɔfʃɔθ', 'pʊɡlip', 'lu', 'pɪwu', 'luɡrə', 'la', 'rilnə', 'ɡæ', 'nʊnæ', 'ɡa'],
			SR: ['si̥', 'θæʃtɔ̥', 'kæ̥', 'θiʃku̥', 'nəskɛ̥', 'ʃitθe̥', 'ɡɪlʃɛ̥', 'sɑpkə̥', 'rɔfo̥', 'ŋətpo̥', 'nupte̥', 'ɡɔnte̥', 'pʊpkʊ̥', 'tʊkθɑ̥', 'kɛθtə̥', 'θoʃtɔ̥', 'nənfə̥', 'kotθi̥', 'ʃe̥', 'pɔmkʊ̥', 'nufkʊ̥', 'po̥', 'kʊfsə̥', 'fɔ̥', 'fɑɡjɪk', 'θuʃ', 'kɪk', 'θelok', 'fɔɡwɪ', 'θamʃəp', 'θɔfʃɔθ', 'pʊɡlip', 'lu', 'pɪwu', 'luɡrə', 'la', 'rilnə', 'ɡæ', 'nʊnæ', 'ɡa'],
			gloss: ['understand', 'none', 'rye', 'dirt', 'fresh', 'possum', 'night', 'salamander', 'hummus', 'grape', 'camel', 'baby', 'what', 'survive', 'cloud', 'hope', 'mouth', 'ear', 'urine', 'warm', 'dry', 'thick', 'puppy', 'lift', 'river', 'give', 'garlic', 'road', 'jaw', 'slither', 'eyelid', 'smooth', 'you (sg)', 'get', 'bean', 'potato', 'evil', 'love', 'acorn', 'return'],
			ruleTxt: " word-final vowel devoicing after voiceless consonants"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f θ s ʃ x m n r w j i e ɛ ɔ o u a ",
			ruleType: "Neutralizing",
			poi: "p b t d t͡ʃ d͡ʒ k g ",
			UR: ['jud͡ʒmɛd', 'tab', 'dɔxfɛd͡ʒ', 'θɔʃkeb', 'dekt͡ʃɛd', 'dod͡ʒ', 'duʔtad͡ʒ', 'bɔd͡ʒ', 'ʔɛɡɛd͡ʒ', 'subjub', 'ɡed͡ʒ', 'baɡ', 'd͡ʒornod', 'dɔθxɛd͡ʒ', 'fext͡ʃob', 'd͡ʒuθtaɡ', 'ɡaxped', 'sondab', 'jidd͡ʒɛd͡ʒ', 'bobɡɛd', 'd͡ʒo', 'ded͡ʒas', 'bu', 'beppa', 'damd͡ʒu', 'bɔxɔ', 'd͡ʒebɡa', 'faɡba', 'ʃɔnd͡ʒuʔ', 'dɛmʃɛf', 'bɛ', 'rɔbɔ', 'ɡinji', 'd͡ʒet͡ʃ', 'ɡu', 'dorpaj', 'fatsɔj', 'jɛr', 'θirxef', 'rɛt͡ʃt͡ʃɛ'],
			SR: ['jud͡ʒmɛt', 'tap', 'dɔxfɛt͡ʃ', 'θɔʃkep', 'dekt͡ʃɛt', 'dot͡ʃ', 'duʔtat͡ʃ', 'bɔt͡ʃ', 'ʔɛɡɛt͡ʃ', 'subjup', 'ɡet͡ʃ', 'bak', 'd͡ʒornot', 'dɔθxɛt͡ʃ', 'fext͡ʃop', 'd͡ʒuθtak', 'ɡaxpet', 'sondap', 'jidd͡ʒɛt͡ʃ', 'bobɡɛt', 'd͡ʒo', 'ded͡ʒas', 'bu', 'beppa', 'damd͡ʒu', 'bɔxɔ', 'd͡ʒebɡa', 'faɡba', 'ʃɔnd͡ʒuʔ', 'dɛmʃɛf', 'bɛ', 'rɔbɔ', 'ɡinji', 'd͡ʒet͡ʃ', 'ɡu', 'dorpaj', 'fatsɔj', 'jɛr', 'θirxef', 'rɛt͡ʃt͡ʃɛ'],
			gloss: ['neck', 'become', 'knuckle', 'coriander', 'pea', 'begin', 'regret', 'they (neut)', 'person', 'learn', 'smooth', 'milk', 'street', 'agree', 'forehead', 'day', 'shark', 'sibling', 'sesame', 'see', 'ankle', 'buy', 'daughter', 'zucchini', 'want', 'dry', 'these', 'inland', 'arrive', 'chicken', 'yell', 'eye', 'breathe', 'sun', 'tooth', 'choose', 'bake', 'yellow', 'clan', 'breakfast'],
			ruleTxt: " and in A environment test rule"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ x ɣ m n ŋ r l w i ɛ u ə a ",
			ruleType: "Mixed",
			poi: "p t k pʰ tʰ kʰ ʔ ",
			UR: ['zədʒut', 'ʔɛntəp', 'ʔalʔap', 'fizd͡ʒɛt', 'zukək', 'sɛnɣɛp', 'tamɡɛp', 'mət', 'd͡ʒuʃʃɛk', 'nik', 'ʒat͡ʃt͡ʃəp', 'wɛt', 'tifʃɛp', 'θat', 'ɡiŋak', 'butt͡ʃik', 'ridləʔ', 'kubɣaʔ', 'ŋuðʒaʔ', 'lumɛʔ', 'kɛmʔi', 'tizvɛ', 'ŋɛmtis', 'ʔuxpu', 'pɛʔɛ', 'pinma', 'kamku', 'paspə', 'kəʒd͡ʒɛ', 'ʔɛd͡ʒrə', 'pas', 'məmtəʃ', 'kispə', 'pɛfʃux', 'kɛki', 'tibdu', 'vaŋlaw', 'xuɣul', 'fud͡ʒwu', 'xa'],
			SR: ['zədʒutʰ', 'ʔɛntəpʰ', 'ʔalʔapʰ', 'fizd͡ʒɛtʰ', 'zukəkʰ', 'sɛnɣɛpʰ', 'tamɡɛpʰ', 'mətʰ', 'd͡ʒuʃʃɛkʰ', 'nikʰ', 'ʒat͡ʃt͡ʃəpʰ', 'wɛtʰ', 'tifʃɛpʰ', 'θatʰ', 'ɡiŋakʰ', 'butt͡ʃikʰ', 'ridləʔ', 'kubɣaʔ', 'ŋuðʒaʔ', 'lumɛʔ', 'kɛmʔi', 'tizvɛ', 'ŋɛmtis', 'ʔuxpu', 'pɛʔɛ', 'pinma', 'kamku', 'paspə', 'kəʒd͡ʒɛ', 'ʔɛd͡ʒrə', 'pas', 'məmtəʃ', 'kispə', 'pɛfʃux', 'kɛki', 'tibdu', 'vaŋlaw', 'xuɣul', 'fud͡ʒwu', 'xa'],
			gloss: ['corn', 'mother', 'cucumber', 'grapefruit', 'desire', 'carrot', 'some', 'most', 'evening', 'llama', 'name', 'sister', 'brown', 'waterfall', 'nobody', 'grape', 'chest', 'beach', 'ash', 'we', 'discover', 'explain', 'which', 'burn', 'leaf', 'head', 'hedgehog', 'jaw', 'run', 'white', 'they (neut)', 'dry', 'four', 'sauce', 'blue/green', 'thin', 'cold', 'downhill', 'baby', 'murky'],
			ruleTxt: " word-final aspiration of voiceless stops"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ m n ŋ r i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ə i̥ ɪ̥ e̥ ɛ̥ æ̥ ḁ ɑ̥ o̥ ɔ̥ u̥ ʊ̥ ə̥ ",
			UR: ['ɡæ', 'ti', 'mə', 'bəðro', 'kɔkku', 'tɪbmu', 'panfɔ', 'ʒʊɡðɪ', 'dɑrzi', 'ɡəʃsɑ', 'pirze', 'tərnɔ', 'zɛmkɛ', 'kiθa', 'mɛdni', 'na', 'ʃɪʔtə', 'θæpʔu', 'ro', 'ʔe', 'sɛkku', 'ʃoŋbe', 'ʒəru', 'bəna', 'ʃʊr', 'zədvɔn', 'sɛɡoʒ', 'væθʃed', 'pobraθ', 'burʔom', 'todʒaθ', 'pəndær', 'mefθɑr', 'ʔaŋsub', 'ðoʔʔɑp', 'vʊʔfʊb', 'ʒɔbvɪv', 'təbrɛn', 'ðofsʊʔ', 'kɛrɡav'],
			SR: ['ɡæ̥', 'ti̥', 'mə̥', 'bəðro̥', 'kɔkku̥', 'tɪbmu̥', 'panfɔ̥', 'ʒʊɡðɪ̥', 'dɑrzi̥', 'ɡəʃsɑ̥', 'pirze̥', 'tərnɔ̥', 'zɛmkɛ̥', 'kiθḁ', 'mɛdni̥', 'nḁ', 'ʃɪʔtə̥', 'θæpʔu̥', 'ro̥', 'ʔe̥', 'sɛkku̥', 'ʃoŋbe̥', 'ʒəru̥', 'bənḁ', 'ʃʊr', 'zədvɔn', 'sɛɡoʒ', 'væθʃed', 'pobraθ', 'burʔom', 'todʒaθ', 'pəndær', 'mefθɑr', 'ʔaŋsub', 'ðoʔʔɑp', 'vʊʔfʊb', 'ʒɔbvɪv', 'təbrɛn', 'ðofsʊʔ', 'kɛrɡav'],
			gloss: ['zucchini', 'midday ', 'become', 'this', 'allow', 'saliva', 'cold', 'they (masc)', 'it', 'all', 'fire', 'moon', 'come', 'road', 'woman', 'I', 'chicken', 'chest', 'want', 'lie down', 'grey', 'rock', 'green', 'bumpy', 'tail', 'grain', 'cream', 'succeed', 'grape', 'believe', 'murky', 'coyote', 'zero', 'borrow', 'when', 'snore', 'trade', 'face', 'aunt', 'find'],
			ruleTxt: " word-final vowel devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g t͡ʃ θ s ʃ h x m n ŋ r l w i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ĩ ɪ̃ ẽ ɛ̃ æ̃ ã ɑ̃ õ ɔ̃ ũ ʊ̃ ə ə̃ ",
			UR: ['ɡɛɡŋæ', 'mokho', 'moɡŋə', 'mut', 'mɔ', 'taɡme', 'ʃɑɡmaɡ', 't͡ʃɑmmɔ', 'ŋoɡŋep', 'nɑkθɛt͡ʃ', 'θɑŋo', 'wɑŋɔr', 'ɡeɡŋeθ', 'tæŋɑ', 'ɡiɡmɑm', 'ŋelɪŋ', 'mʊɡmæ', 'pæmʊ', 'nɪt͡ʃpɪw', 'ŋɔʃkæ', 'toɡŋa', 't͡ʃoɡmor', 't͡ʃʊɡnət͡ʃ', 'xæɡŋip', 'wʊrɪl', 'lɪw', 'θoɡle', 'ʃɔtke', 'loʃʃʊk', 'θorrɔr', 'hamɡu', 'rɛtʃaθ', 'ʃɛl', 'wusxas', 'luŋpat͡ʃ', 'θæ', 'hɑʃ', 'rɛht͡ʃem', 'tɑkʊ', 'sat͡ʃt͡ʃɔm'] ,
			SR: ['ɡɛɡŋæ̃', 'mõkho', 'mõɡŋə̃', 'mũt', 'mɔ̃', 'taɡmẽ', 'ʃɑɡmãɡ', 't͡ʃɑmmɔ̃', 'ŋõɡŋẽp', 'nɑ̃kθɛt͡ʃ', 'θɑŋõ', 'wɑŋɔ̃r', 'ɡeɡŋẽθ', 'tæŋɑ̃', 'ɡiɡmɑ̃m', 'ŋẽlɪŋ', 'mʊ̃ɡmæ̃', 'pæmʊ̃', 'nɪ̃t͡ʃpɪw', 'ŋɔ̃ʃkæ', 'toɡŋã', 't͡ʃoɡmõr', 't͡ʃʊɡnə̃t͡ʃ', 'xæɡŋĩp', 'wʊrɪl', 'lɪw', 'θoɡle', 'ʃɔtke', 'loʃʃʊk', 'θorrɔr', 'hamɡu', 'rɛtʃaθ', 'ʃɛl', 'wusxas', 'luŋpat͡ʃ', 'θæ', 'hɑʃ', 'rɛht͡ʃem', 'tɑkʊ', 'sat͡ʃt͡ʃɔm'] ,
			gloss:  ['beard', 'stir', 'bright', 'then', 'rabbit', 'child', 'sip', 'forget', 'what', 'tomato', 'hyena', 'slide', 'lizard', 'continue', 'they (neut)', 'ash', 'liver', 'each', 'eyelid', 'friend', 'husband', 'you (dual)', 'man', 'name', 'say', 'like', 'dream', 'knuckle', 'grow', 'parrot', 'lemon', 'choose', 'purple', 'wolf', 'inland', 'ocean', 'warm', 'food', 'thick', 'mouth'] ,
			ruleTxt: " progressive vowel nasalization"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v s z x ɣ n ŋ r l w j i u a ",
			ruleType: "Mixed",
			poi: "p ɸ t s k x ʔ ",
			UR: ['kunʔap', 'fut', 'ɡuɣlup', 'sut', 'lifut', 'riddup', 'kuŋpat', 'tuvbut', 'kupti', 'juptad', 'dikku', 'papʔan', 'zakpiʔ', 'fuktu', 'ʔukfuŋ', 'watsa', 'tassuʔ', 'pirkaʔ', 'kiʔʔi', 'suʔʔu', 'puɡbi', 'ʔiʔsif', 'paxka', 'nufpi', 'ʔaɡvuj', 'wanpiv', 'kapʔuw', 'tulpi', 'ʔibwiʔ', 'zuɡaʔ', 'dulka', 'kal', 'kiɣ', 'kifka', 'tibvi', 'ʔapa', 'lafa', 'binŋaɡ', 'rufxul', 'xasxuw'] ,
			SR: ['kunʔaɸ', 'fus', 'ɡuɣluɸ', 'sus', 'lifus', 'ridduɸ', 'kuŋpas', 'tuvbus', 'kuɸti', 'juɸtad', 'dixku', 'paɸʔan', 'zaxpiʔ', 'fuxtu', 'ʔuxfuŋ', 'wassa', 'tassuʔ', 'pirkaʔ', 'kiʔʔi', 'suʔʔu', 'puɡbi', 'ʔiʔsif', 'paxka', 'nufpi', 'ʔaɡvuj', 'wanpiv', 'kaɸʔuw', 'tulpi', 'ʔibwiʔ', 'zuɡaʔ', 'dulka', 'kal', 'kiɣ', 'kifka', 'tibvi', 'ʔapa', 'lafa', 'binŋaɡ', 'rufxul', 'xasxuw'] ,
			gloss:  ['I', 'raspberry', 'spinach', 'man', 'burn', 'milk', 'morning', 'hesitate', 'duck', 'leave', 'raccoon ', 'blue/green', 'good', 'forest', 'ash', 'wrist', 'kneel', 'grain', 'peanut', 'spouse', 'few', 'ocean', 'bean', 'empty', 'mountain', 'call', 'that', 'daughter', 'dislike', 'forgive', 'they (masc)', 'pepper', 'jump', 'you (sg)', 'flesh', 'rough', 'moss', 'old', 'abdomen', 'scorpion'] ,
			ruleTxt: " spirantization of voiceless stops in codas"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ h x ɣ m n ŋ r l w i e ɛ ɔ o æ ɑ ",
			ruleType: "Alternating",
			poi: "ç ʝ x ɣ ",
			UR: ['ɡibmix', 'lixxo', 'xiɣɑ', 'pævɣix', 'biɣɣɔ', 'ŋixæ', 'xiɣɣi', 'ʃɔthiɣ', 'sixæ', 'piɣ', 'ʃidlix', 'ðeðnix', 'tiɣ', 'vizɣiɣ', 'mix', 'fixɑð', 'viɣwon', 'ɡixθow', 'xiɣ', 'ʃiɣɛ', 'kɔʔxɛ', 'xexɑ', 'ɣilvɛ', 'ɣifæ', 'neɣɛ', 'xeð', 'ðozɣe', 'ʒibɣe', 'ɣɔɡi', 'ɣeθon', 'ɣo', 'mɛðɛɣ', 'xoɣŋɛ', 'kɑbɣɑʔ', 'hɑɣɣɔ', 'sɑʃxe', 'dæθoʒ', 'rolʒe', 'ɡɛdneð', 'weblɔ'] ,
			SR: ['ɡibmiç', 'liçxo', 'xiʝɑ', 'pævɣiç', 'biʝɣɔ', 'ŋiçæ', 'xiʝɣi', 'ʃɔthiʝ', 'siçæ', 'piʝ', 'ʃidliç', 'ðeðniç', 'tiʝ', 'vizɣiʝ', 'miç', 'fiçɑð', 'viʝwon', 'ɡiçθow', 'xiʝ', 'ʃiʝɛ', 'kɔʔxɛ', 'xexɑ', 'ɣilvɛ', 'ɣifæ', 'neɣɛ', 'xeð', 'ðozɣe', 'ʒibɣe', 'ɣɔɡi', 'ɣeθon', 'ɣo', 'mɛðɛɣ', 'xoɣŋɛ', 'kɑbɣɑʔ', 'hɑɣɣɔ', 'sɑʃxe', 'dæθoʒ', 'rolʒe', 'ɡɛdneð', 'weblɔ'] ,
			gloss:  ['they (neut)', 'preach', 'grapefruit', 'salmon', 'liver', 'abdomen', 'sell', 'those', 'flea', 'yellow', 'meal', 'he/she/it', 'ear', 'cantaloupe', 'green', 'purple', 'dirt', 'fog', 'spicy', 'kill', 'fur', 'you (dual)', 'good', 'push', 'family', 'sea', 'coastline', 'fox', 'taste', 'snake', 'person', 'write', 'liquid', 'uphill', 'spouse', 'hide', 'celery', 'daughter', 'quinoa', 'knee'] ,
			ruleTxt: " palatalization of velar fricatives after high front vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f θ s ʃ h m n ŋ r l j i u ə a ",
			ruleType: "Neutralizing",
			poi: "p b t d t͡ʃ d͡ʒ k g ",
			UR: ['baŋud͡ʒ', 'ɡirʃud͡ʒ', 'bəbiɡ', 'kipəd͡ʒ', 'baɡ', 'ʔuʔaɡ', 'θabad', 'd͡ʒuthab', 'pid͡ʒŋad', 'rilŋəd͡ʒ', 'tiŋʃud', 'd͡ʒub', 'lafpaɡ', 'd͡ʒaʔhad', 'θud', 'murid͡ʒ', 'd͡ʒaɡ', 'ɡumθiɡ', 'hassib', 'laθfub', 'd͡ʒidda', 'bəpə', 'd͡ʒuspi', 'd͡ʒudnə', 'bastə', 'ɡaθθi', 'ba', 'dadd͡ʒiθ', 'dəɡaʔ', 'dapsa', 'dahʔak', 'diʔa', 'budə', 'd͡ʒid͡ʒəʃ', 'ɡaspa', 'ɡulna', 'mufiŋ', 'tit͡ʃpu', 'tut͡ʃ', 'lunəh'] ,
			SR: ['baŋut͡ʃ', 'ɡirʃut͡ʃ', 'bəbik', 'kipət͡ʃ', 'bak', 'ʔuʔak', 'θabat', 'd͡ʒuthap', 'pid͡ʒŋat', 'rilŋət͡ʃ', 'tiŋʃut', 'd͡ʒup', 'lafpak', 'd͡ʒaʔhat', 'θut', 'murit͡ʃ', 'd͡ʒak', 'ɡumθik', 'hassip', 'laθfup', 'd͡ʒidda', 'bəpə', 'd͡ʒuspi', 'd͡ʒudnə', 'bastə', 'ɡaθθi', 'ba', 'dadd͡ʒiθ', 'dəɡaʔ', 'dapsa', 'dahʔak', 'diʔa', 'budə', 'd͡ʒid͡ʒəʃ', 'ɡaspa', 'ɡulna', 'mufiŋ', 'tit͡ʃpu', 'tut͡ʃ', 'lunəh'] ,
			gloss:  ['breathe', 'evening', 'nowhere', 'husband', 'snow', 'wine', 'jaw', 'yellow', 'road', 'get', 'stand', 'he', 'woman', 'ignore', 'old', 'melon', 'goose', 'mountain', 'mango', 'become', 'shark', 'island', 'thin', 'build', 'bull', 'lose', 'leaf', 'berry', 'kitten', 'group', 'regret', 'bright', 'you (sg)', 'snake', 'they (fem)', 'ocean', 'bake', 'finger', 'earlobe', 'hundred'] ,
			ruleTxt: " word-final obstruent devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h x ɣ m n ŋ r l w j i e ɔ ə a ",
			ruleType: "Mixed",
			poi: "p b f v t d θ ð s z ʃ ʒ t͡ʃ d͡ʒ k g x ɣ h ɦ ",
			UR: ['fensɔ', 'dənha', 'xinxɔ', 'ŋenxɔ', 'ʃimfəʃ', 'ɡəŋtaŋ', 'ximkəs', 'θəmxit͡ʃ', 'santə', 'pənxeʒ', 'ʃəŋka', 'ʃɔnhəh', 'paŋθi', 'ŋamfah', 'pimkek', 'bɔŋkɔl', 'ðiŋt͡ʃi', 'θamθa', 'jinha', 'dense', 'θeja', 'xekθe', 'xapə', 't͡ʃidmət͡ʃ', 't͡ʃadɡə', 'tɔʒʒɔl', 'sit͡ʃ', 't͡ʃin', 'hi', 't͡ʃerʃə', 'ʃəd͡ʒʒi', 'pe', 't͡ʃirðə', 'd͡ʒepʃɔ', 'xəʒjəf', 'həlha', 'zəɣze', 'ɡiŋnid͡ʒ', 'ŋeɣeŋ', 'vajə'] ,
			SR: ['fenzɔ', 'dənɦa', 'xinɣɔ', 'ŋenɣɔ', 'ʃimvəʃ', 'ɡəŋdaŋ', 'ximɡəs', 'θəmɣit͡ʃ', 'sandə', 'pənɣeʒ', 'ʃəŋɡa', 'ʃɔnɦəh', 'paŋði', 'ŋamvah', 'pimɡek', 'bɔŋɡɔl', 'ðiŋd͡ʒi', 'θamða', 'jinɦa', 'denze', 'θeja', 'xekθe', 'xapə', 't͡ʃidmət͡ʃ', 't͡ʃadɡə', 'tɔʒʒɔl', 'sit͡ʃ', 't͡ʃin', 'hi', 't͡ʃerʃə', 'ʃəd͡ʒʒi', 'pe', 't͡ʃirðə', 'd͡ʒepʃɔ', 'xəʒjəf', 'həlha', 'zəɣze', 'ɡiŋnid͡ʒ', 'ŋeɣeŋ', 'vajə'] ,
			gloss:  ['banana', 'morning', 'they (fem)', 'brother', 'tribe', 'belly', 'all', 'forest', 'enjoy', 'stand', 'daughter', 'damp', 'sun', 'mustard', 'meat', 'fire', 'oats', 'we (excl)', 'most', 'where', 'expect', 'new', 'grape', 'lion', 'study', 'rabbit', 'stream', 'cashew', 'walk', 'good', 'bite', 'fight', 'she', 'knee', 'you (dual)', 'knuckle', 'path', 'receive', 'improve', 'oil'] ,
			ruleTxt: " postnasal voicing of obstruents"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g f θ s ʃ n ŋ l i ɪ e ɛ ɔ o ʊ u ə æ ɑ ",
			ruleType: "Mixed",
			poi: "u ʊ ʉ ",
			UR: ['θʊɡnu', 'nuɡnʊ', 'nuləʃ', 'tɪʃsu', 'luŋɡu', 'θʊŋnu', 'lu', 'nunu', 'tuθkɔ', 'suθ', 'ʃeŋlul', 'ʃuŋtu', 'supʃʊ', 'lunsu', 'θutuʃ', 'nuɡnu', 'nʊɡʊs', 'lɪŋsʊp', 'sʊθθu', 'nʊɡɡu', 'θunʃɑ', 'kæθkuθ', 'θʊŋʊ', 'θʊŋ', 'pus', 'kʊɡŋu', 'ɡu', 'kʊskəɡ', 'θʊθ', 'feɡʊ', 'putɪθ', 'θuɡŋu', 'pɛɡŋʊɡ', 'pu', 'ŋupʊ', 'fʊffʊs', 'ɡoleŋ', 'θoʃkə', 'fɑllɛf', 'nenɡeθ'] ,
			SR: ['θʊɡnʉ', 'nʉɡnʊ', 'nʉləʃ', 'tɪʃsʉ', 'lʉŋɡu', 'θʊŋnʉ', 'lʉ', 'nʉnʉ', 'tʉθkɔ', 'sʉθ', 'ʃeŋlʉl', 'ʃuŋtʉ', 'sʉpʃʊ', 'lʉnsʉ', 'θutʉʃ', 'nʉɡnʉ', 'nʊɡʊs', 'lɪŋsʊp', 'sʊθθu', 'nʊɡɡu', 'θunʃɑ', 'kæθkuθ', 'θʊŋʊ', 'θʊŋ', 'pus', 'kʊɡŋu', 'ɡu', 'kʊskəɡ', 'θʊθ', 'feɡʊ', 'putɪθ', 'θuɡŋu', 'pɛɡŋʊɡ', 'pu', 'ŋupʊ', 'fʊffʊs', 'ɡoleŋ', 'θoʃkə', 'fɑllɛf', 'nenɡeθ'] ,
			gloss:  ['surprise', 'salt', 'rice', 'eyebrow', 'lift', 'warm', 'lip', 'parent', 'toe', 'grapefruit', 'hope', 'spinach', 'adore', 'lose', 'wrist', 'some', 'worm', 'those', 'dark', 'look', 'forest', 'green', 'crawl', 'die', 'bathe', 'avoid', 'calf', 'wolf', 'they', 'soybean', 'dry', 'trout', 'beer', 'not', 'uncle', 'continue', 'feast', 'sun', 'work', 'which'] ,
			ruleTxt: " fronting of high back vowels after alveolars"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h m n ŋ r l w j i e o u ə a ",
			ruleType: "Alternating",
			poi: "c ɟ ɲ k g ŋ ",
			UR: ['ʔulðiɡ', 'zoŋʃik', 'kəŋðik', 't͡ʃeŋd͡ʒak', 'wikə', 'ɡeɡ', 'niŋro', 'ɡikko', 'jeki', 'hiɡis', 'tiŋnək', 'ɡeŋʃiʒ', 't͡ʃiɡne', 'ŋeɡŋuj', 'θike', 'həʃkeɡ', 'wekə', 'ʔeʃiŋ', 'meŋ', 'ɡekfiŋ', 'kist͡ʃa', 'makə', 'ŋətki', 'ŋuɡɡi', 'toɡda', 'ʒurɡi', 'koŋŋi', 'ʃaŋŋuŋ', 'θiðɡuf', 'nerken', 'muŋkuʒ', 'forɡol', 'ruvluŋ', 'ɡud͡ʒŋi', 'həkif', 'ŋoɡe', 'zəma', 'zoh', 'dutfun', 'so'] ,
			SR: ['ʔulðiɟ', 'zoŋʃic', 'kəŋðic', 't͡ʃeɲd͡ʒak', 'wicə', 'ɡeɟ', 'niɲro', 'ɡicko', 'jeci', 'hiɟis', 'tiɲnək', 'ɡeɲʃiʒ', 't͡ʃiɟne', 'ŋeɟŋuj', 'θice', 'həʃkeɟ', 'wecə', 'ʔeʃiɲ', 'meɲ', 'ɡecfiɲ', 'kist͡ʃa', 'makə', 'ŋətki', 'ŋuɡɡi', 'toɡda', 'ʒurɡi', 'koŋŋi', 'ʃaŋŋuŋ', 'θiðɡuf', 'nerken', 'muŋkuʒ', 'forɡol', 'ruvluŋ', 'ɡud͡ʒŋi', 'həkif', 'ŋoɡe', 'zəma', 'zoh', 'dutfun', 'so'] ,
			gloss:  ['boil', 'man', 'sand', 'pink', 'teach', 'believe', 'llama', 'trade', 'try', 'possum', 'chin', 'they (masc)', 'awaken', 'water', 'sneeze', 'quinoa', 'shoulder', 'discover', 'hair', 'honey', 'those', 'feces', 'eyelash', 'fire', 'most', 'return', 'bean', 'potato', 'flat', 'salt', 'we', 'ask', 'storm', 'midday ', 'worm', 'some', 'agree', 'fruit', 'sparrow', 'ignore'] ,
			ruleTxt: " palatalization of velars after front vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h m n ŋ r l w j i ɪ e ɛ ɔ o ʊ u æ ɑ ",
			ruleType: "Mixed",
			poi: "i ɪ ɨ ",
			UR: ['t͡ʃiθt͡ʃɪð', 'ʒɪʒʒi', 'ʒiðli', 'ʒipɪŋ', 'pɪnt͡ʃij', 'd͡ʒiphʊð', 't͡ʃiðzɪ', 'ɡit͡ʃi', 'ʒufʃi', 't͡ʃit͡ʃt͡ʃiz', 'rɪŋd͡ʒi', 't͡ʃirrɪw', 'd͡ʒifteŋ', 't͡ʃɛʃʃi', 'd͡ʒilmi', 'ʃil', 'ʃɪθsi', 't͡ʃɪt͡ʃθɪh', 'zɪʒd͡ʒɪ', 'jɪʒd͡ʒɪ', 'windɑ', 'wiðjɪs', 'ʃɔftib', 'ðɪt͡ʃʃʊf', 'lɪrpiz', 'wihhi', 'ɡivzi', 'morrɪ', 'kuzlɪv', 'ʒomdɪd', 'bæwi', 'bɪj', 'dinnæ', 'pɪlt͡ʃu', 'tæwi', 'soʒwɪk', 'ðæʒʒɑ', 'zɑfke', 'donwæ', 'pekæʃ'] ,
			SR: ['t͡ʃɨθt͡ʃɪð', 'ʒɪʒʒɨ', 'ʒɨðli', 'ʒɨpɪŋ', 'pɪnt͡ʃɨj', 'd͡ʒɨphʊð', 't͡ʃɨðzɪ', 'ɡit͡ʃɨ', 'ʒufʃɨ', 't͡ʃɨt͡ʃt͡ʃɨz', 'rɪŋd͡ʒɨ', 't͡ʃɨrrɪw', 'd͡ʒɨfteŋ', 't͡ʃɛʃʃɨ', 'd͡ʒɨlmi', 'ʃɨl', 'ʃɪθsi', 't͡ʃɪt͡ʃθɪh', 'zɪʒd͡ʒɪ', 'jɪʒd͡ʒɪ', 'windɑ', 'wiðjɪs', 'ʃɔftib', 'ðɪt͡ʃʃʊf', 'lɪrpiz', 'wihhi', 'ɡivzi', 'morrɪ', 'kuzlɪv', 'ʒomdɪd', 'bæwi', 'bɪj', 'dinnæ', 'pɪlt͡ʃu', 'tæwi', 'soʒwɪk', 'ðæʒʒɑ', 'zɑfke', 'donwæ', 'pekæʃ'] ,
			gloss:  ['most', 'two', 'spicy', 'tongue', 'new', 'group', 'brown', 'flame', 'fox', 'stream', 'all', 'dark', 'tomato', 'prevent', 'cat', 'grapefruit', 'finish', 'you (sg)', 'eat', 'baby', 'no', 'blackberry', 'nose', 'make', 'borrow', 'breakfast', 'they (neut)', 'call', 'grey', 'expect', 'leave', 'gourd', 'experience', 'some', 'it', 'walnut', 'dry', 'thumb', 'forehead', 'tuna'] ,
			ruleTxt: " retraction of high front vowels after postalveolars"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g θ ð s z ʃ ʒ m n r w j i ɪ e ɛ ɔ o ʊ u ə æ ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ u ʊ i̥ ɪ̥ u̥ ʊ̥ ",
			UR: ['muʃki', 'zekʃɪ', 'ɡæθpi', 'sʊθɪ', 'ʃɪ', 'ʃirtu', 'sɪ', 'ʃutɪ', 'kɛʃsɪ', 'ʒutsɪ', 'pi', 'ɡɔθsi', 'si', 'siθsɪ', 'ðʊpi', 'pu', 'dunki', 'ʃuspɪ', 'jinpɪ', 'simʃʊ', 'ʒʊmθuð', 'ʒʊktit', 'tiwo', 'turwɛk', 'kɪj', 'ɡimsɪj', 'θɪbbit', 'nɑθun', 'nɪmnu', 'ʃɪɡbʊ', 'mɪnʒʊ', 'dʊnni', 'nʊ', 'jɪ', 'ʒæwʊ', 'ni', 'ðɔkke', 'pæs', 'tæ', 'nɛ'] ,
			SR: ['muʃki̥', 'zekʃɪ̥', 'ɡæθpi̥', 'sʊθɪ̥', 'ʃɪ̥', 'ʃirtu̥', 'sɪ̥', 'ʃutɪ̥', 'kɛʃsɪ̥', 'ʒutsɪ̥', 'pi̥', 'ɡɔθsi̥', 'si̥', 'siθsɪ̥', 'ðʊpi̥', 'pu̥', 'dunki̥', 'ʃuspɪ̥', 'jinpɪ̥', 'simʃʊ̥', 'ʒʊmθuð', 'ʒʊktit', 'tiwo', 'turwɛk', 'kɪj', 'ɡimsɪj', 'θɪbbit', 'nɑθun', 'nɪmnu', 'ʃɪɡbʊ', 'mɪnʒʊ', 'dʊnni', 'nʊ', 'jɪ', 'ʒæwʊ', 'ni', 'ðɔkke', 'pæs', 'tæ', 'nɛ'] ,
			gloss:  ['worm', 'wife', 'star', 'apple', 'sugar', 'warm', 'bad', 'ear', 'all', 'what', 'dolphin', 'peanut', 'adore', 'sibling', 'take', 'fire', 'child', 'jump', 'we', 'no', 'falafel', 'they (fem)', 'choose', 'few', 'need', 'dark', 'storm', 'skin', 'cook', 'he/she/it', 'blue', 'two', 'lose', 'pebble', 'dry', 'grey', 'leopard', 'awaken', 'point', 'fresh'] ,
			ruleTxt: " word-final high vowel devoicing after voiceless consonants"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g ʔ t͡ʃ f θ s ʃ x m n ŋ r l i ɪ e ɛ ɔ o ʊ u ə a ",
			ruleType: "Neutralizing",
			poi: "i ɪ e ɛ o ɔ u ʊ ə ",
			UR: ['ŋɪɡnɔ', 'kɔ', 'notsɛ', 'pe', 'ɡəkɛ', 'ʃɛmo', 'ro', 't͡ʃəɡlɛ', 'fɔfe', 'ŋelrɔ', 'fɪʔɔ', 'larɡɔ', 't͡ʃonkɛ', 'xɛlt͡ʃɔ', 'ʔofo', 'nopɛ', 'θə', 't͡ʃɔnə', 'saʃə', 'θɔtə', 'nɛθ', 'neɡlʊk', 'nonruf', 'ŋəf', 'ʔɛɡrʊ', 'kom', 'seʃ', 'lepxil', 'ɡəlʔax', 'somaɡ', 'xɛltən', 'nɔt͡ʃtɛʃ', 'ɡɛl', 'nənʃi', 'ɡɔf', 'kɪrθoʔ', 'piɡŋʊ', 'sanʃi', 'θiɡŋi', 't͡ʃʊ'] ,
			SR: ['ŋɪɡnʊ', 'kʊ', 'notsɪ', 'pi', 'ɡəkɪ', 'ʃɛmu', 'ru', 't͡ʃəɡlɪ', 'fɔfi', 'ŋelrʊ', 'fɪʔʊ', 'larɡʊ', 't͡ʃonkɪ', 'xɛlt͡ʃʊ', 'ʔofu', 'nopɪ', 'θə', 't͡ʃɔnə', 'saʃə', 'θɔtə', 'nɛθ', 'neɡlʊk', 'nonruf', 'ŋəf', 'ʔɛɡrʊ', 'kom', 'seʃ', 'lepxil', 'ɡəlʔax', 'somaɡ', 'xɛltən', 'nɔt͡ʃtɛʃ', 'ɡɛl', 'nənʃi', 'ɡɔf', 'kɪrθoʔ', 'piɡŋʊ', 'sanʃi', 'θiɡŋi', 't͡ʃʊ'] ,
			gloss:  ['one', 'beverage', 'sip', 'who', 'bring', 'preach', 'forget', 'hear', 'woman', 'father', 'green', 'husband', 'swim', 'you (dual)', 'worm', 'bright', 'south', 'fruit bat', 'good', 'forehead', 'smooth', 'proceed', 'leopard', 'day', 'road', 'threaten', 'tongue', 'each', 'skin', 'brother', 'quinoa', 'surprise', 'hide', 'daughter', 'hand', 'spicy', 'grey', 'kill', 'they (neut)', 'food'] ,
			ruleTxt: " word-final raising of mid vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ h x ɣ m n ŋ l j i e ɔ o æ ɑ ",
			ruleType: "Mixed",
			poi: "k g x ɣ ŋ q ɢ ɴ ",
			UR: ['xekfɔɡ', 'sokʔæ', 'xoɡ', 'nɔkɔh', 'xokxo', 'ɣoŋpɑ', 'ɣoŋfop', 'ɣɔɡɔ', 'ŋɑɣdɑɡ', 'kɑɡmox', 'ŋɑkxo', 'zɑɡ', 'ðɑŋkɑ', 'ðæɣnɑɡ', 'vɑkkæ', 'xɑɡlib', 'θox', 'ʒɔɣov', 'ŋɑxɑ', 'ŋoxɑx', 'ʃixtɑ', 'ðivlex', 'ŋiŋhix', 'ɣætɑɣ', 'ŋibŋe', 'ɡæɣɑ', 'ɡeɣmov', 'ðɔdæk', 'ŋoθse', 'ɣevmi', 'ŋæ', 'ŋi', 'joxhɑ', 'ɣiɡɣi', 'ðɔxke', 'ɣeŋɔɣ', 'ʒimbɔ', 'teθɔð', 'ʒomziʃ', 'ðeθfof'] ,
			SR: ['xekfɔɢ', 'soqʔæ', 'xoɢ', 'nɔqɔh', 'xoqxo', 'ɣoɴpɑ', 'ɣoɴfop', 'ɣɔɢɔ', 'ŋɑɣdɑɢ', 'kɑɢmox', 'ŋɑqxo', 'zɑɢ', 'ðɑɴkɑ', 'ðæɣnɑɢ', 'vɑqkæ', 'xɑɢlib', 'θox', 'ʒɔɣov', 'ŋɑxɑ', 'ŋoxɑx', 'ʃixtɑ', 'ðivlex', 'ŋiŋhix', 'ɣætɑɣ', 'ŋibŋe', 'ɡæɣɑ', 'ɡeɣmov', 'ðɔdæk', 'ŋoθse', 'ɣevmi', 'ŋæ', 'ŋi', 'joxhɑ', 'ɣiɡɣi', 'ðɔxke', 'ɣeŋɔɣ', 'ʒimbɔ', 'teθɔð', 'ʒomziʃ', 'ðeθfof'] ,
			gloss:  ['mother', 'quit', 'hope', 'awaken', 'spicy', 'snore', 'purple', 'grow', 'tail', 'we', 'dove', 'coastline', 'gravy', 'bumpy', 'it', 'possum', 'cashew', 'come', 'lentil', 'salamander', 'evil', 'cow', 'look', 'rice', 'find', 'four', 'heavy', 'new', 'accuse', 'tomato', 'wrist', 'sister', 'no', 'direction', 'wet', 'cucumber', 'pay', 'obtain', 'dislike', 'chin'] ,
			ruleTxt: " uvularization of velars after back non-high vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h x ɣ m n l w j i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ə i̥ ɪ̥ e̥ ɛ̥ æ̥ ḁ ɑ̥ o̥ ɔ̥ u̥ ʊ̥ ə̥ ",
			UR: ['ʒæ', 'be', 'd͡ʒuʃt͡ʃɑ', 'ɣɔmt͡ʃu', 'wi', 'madʒi', 'wɑðæ', 'ɣɑʃɑ', 'bɔwi', 'todnɛ', 'kotθɪ', 'wəbu', 'wæ', 't͡ʃu', 'lɪ', 'zɔʃsæ', 'ɣɪt͡ʃu', 'te', 'pɪθʃe', 'θamjɪ', 'zosæ', 'ɡaðdʊ', 'd͡ʒɔsθi', 'ɡazzʊ', 'ɣothɑʃ', 'fəlʒɪp', 'nonɡuf', 'vɛt͡ʃpɑɡ', 'wɪnmɪd', 'ʃæxfæz', 'loʒɡəʃ', 'moɣɛt͡ʃ', 'dæʃiv', 'kɪʃfɛz', 'ɡɑblɔʒ', 'd͡ʒimlɔm', 'fɔnfið', 'ʒɛdwɪk', 'dʊʒ', 'nʊɡɛm'] ,
			SR: ['ʒæ̥', 'be̥', 'd͡ʒuʃt͡ʃɑ̥', 'ɣɔmt͡ʃu̥', 'wi̥', 'madʒi̥', 'wɑðæ̥', 'ɣɑʃɑ̥', 'bɔwi̥', 'todnɛ̥', 'kotθɪ̥', 'wəbu̥', 'wæ̥', 't͡ʃu̥', 'lɪ̥', 'zɔʃsæ̥', 'ɣɪt͡ʃu̥', 'te̥', 'pɪθʃe̥', 'θamjɪ̥', 'zosæ̥', 'ɡaðdʊ̥', 'd͡ʒɔsθi̥', 'ɡazzʊ̥', 'ɣothɑʃ', 'fəlʒɪp', 'nonɡuf', 'vɛt͡ʃpɑɡ', 'wɪnmɪd', 'ʃæxfæz', 'loʒɡəʃ', 'moɣɛt͡ʃ', 'dæʃiv', 'kɪʃfɛz', 'ɡɑblɔʒ', 'd͡ʒimlɔm', 'fɔnfið', 'ʒɛdwɪk', 'dʊʒ', 'nʊɡɛm'] ,
			gloss:  ['forefinger', 'this', 'morning', 'grey', 'river', 'empty', 'earlobe', 'torso', 'friend', 'flat', 'north', 'he/she/it', 'barley', 'almond', 'valley', 'we (dual)', 'change', 'lizard', 'hundred', 'dim', 'lift', 'few', 'pebble', 'sister', 'good', 'young', 'lose', 'insect', 'decide', 'they (dual)', 'gravy', 'bite', 'tribe', 'chin', 'expect', 'red', 'nutmeg', 'parrot', 'child', 'wish'] ,
			ruleTxt: " word-final vowel devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g f v θ ð s z ʃ ʒ h x ɣ n ŋ j i u a ",
			ruleType: "Alternating",
			poi: "ç ʝ x ɣ ",
			UR: ['ɡiɣba', 'xiɣix', 'ŋuɣiɣ', 'ɣiɣvif', 'kiɣðif', 'vusxiɣ', 'jixxaɣ', 'ɣiɣŋik', 'ziʒŋix', 'jiɣðu', 'fiŋix', 'jixxi', 'zix', 'ziɣɣi', 'ɣiɣ', 'vixθux', 'ʃixxu', 'tixkup', 'ʃadɣiɣ', 'ɡuvix', 'xaɣa', 'kunxu', 'zinɣu', 'faxið', 'ɡuxpip', 'ɣufsi', 'zuŋɣux', 'zidaɣ', 'nuxxu', 'finɣa', 'ɣiʃu', 'xaftab', 'xaʒbi', 'ʒuɣvu', 'kuŋɣi', 'taxsu', 'tu', 'fiŋha', 'θibup', 'ʃuða'] ,
			SR: ['ɡiʝba', 'xiʝiç', 'ŋuɣiʝ', 'ɣiʝvif', 'kiʝðif', 'vusxiʝ', 'jiçxaɣ', 'ɣiʝŋik', 'ziʒŋiç', 'jiʝðu', 'fiŋiç', 'jiçxi', 'ziç', 'ziʝɣi', 'ɣiʝ', 'viçθux', 'ʃiçxu', 'tiçkup', 'ʃadɣiʝ', 'ɡuviç', 'xaɣa', 'kunxu', 'zinɣu', 'faxið', 'ɡuxpip', 'ɣufsi', 'zuŋɣux', 'zidaɣ', 'nuxxu', 'finɣa', 'ɣiʃu', 'xaftab', 'xaʒbi', 'ʒuɣvu', 'kuŋɣi', 'taxsu', 'tu', 'fiŋha', 'θibup', 'ʃuða'] ,
			gloss:  ['arm', 'serving', 'they (fem)', 'goose', 'that', 'rough', 'nowhere', 'choose', 'taste', 'cook', 'belly', 'recline', 'spouse', 'enter', 'flame', 'sister', 'dry', 'tree', 'hummus', 'ear', 'skin', 'snow', 'sneeze', 'carrot', 'purple', 'eyebrow', 'gecko', 'accuse', 'father', 'hill', 'zucchini', 'bright', 'get', 'forehead', 'young', 'garlic', 'walk', 'grapefruit', 'heart', 'study'] ,
			ruleTxt: " palatalization of velar fricatives after high front vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z h x ɣ m n l i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ĩ ɪ̃ ẽ ɛ̃ æ̃ ã ɑ̃ õ ɔ̃ ũ ʊ̃ ə ə̃ ",
			UR: ['nʊnθæ', 'mʊd͡ʒ', 'pænɑ', 'həznet', 'zodne', 'nimzʊt', 'hʊnnu', 'mɛndu', 'neθθɛf', 'zʊd͡ʒni', 'bæmʊp', 'læməv', 'nəzvɔ', 'mɑt', 'na', 'xibmin', 'mɛtt͡ʃə', 'mænlɛ', 'nɛzæ', 'ɣazna', 'humə', 'noɡðæ', 'nutɪ', 'məθʊh', 'hɪnzʊ', 'ɡaɡux', 'ðəpxʊx', 'daɣd͡ʒaθ', 'solzɛ', 'kɪmlɔd', 'kespɑd͡ʒ', 'laxke', 'fæmvʊð', 'ɣɛpkɔ', 'zʊblu', 'θəsa', 'ðelzɛ', 'vonsɑ', 'poðbə', 'ðæd͡ʒd͡ʒʊh'] ,
			SR: ['nʊ̃nθæ', 'mʊ̃d͡ʒ', 'pænɑ̃', 'həznẽt', 'zodnẽ', 'nĩmzʊt', 'hʊnnũ', 'mɛ̃ndu', 'nẽθθɛf', 'zʊd͡ʒnĩ', 'bæmʊ̃p', 'læmə̃v', 'nə̃zvɔ', 'mɑ̃t', 'nã', 'xibmĩn', 'mɛ̃tt͡ʃə', 'mæ̃nlɛ', 'nɛ̃zæ', 'ɣaznã', 'humə̃', 'nõɡðæ', 'nũtɪ', 'mə̃θʊh', 'hɪnzʊ', 'ɡaɡux', 'ðəpxʊx', 'daɣd͡ʒaθ', 'solzɛ', 'kɪmlɔd', 'kespɑd͡ʒ', 'laxke', 'fæmvʊð', 'ɣɛpkɔ', 'zʊblu', 'θəsa', 'ðelzɛ', 'vonsɑ', 'poðbə', 'ðæd͡ʒd͡ʒʊh'] ,
			gloss:  ['repeat', 'we', 'forgive', 'come', 'salamander', 'gourd', 'ox', 'each', 'they (masc)', 'sibling', 'yellow', 'river', 'snow', 'shut', 'red', 'then', 'forehead', 'sugar', 'fish', 'valley', 'become', 'recline', 'smooth', 'thin', 'most', 'mouse', 'man', 'egg', 'continue', 'meat', 'discover', 'laugh', 'spinach', 'rice', 'bright', 'waist', 'wife', 'day', 'goose', 'damp'] ,
			ruleTxt: " progressive vowel nasalization"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g f θ s ʃ m n r l j i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ĩ ɪ̃ ẽ ɛ̃ æ̃ ã ɑ̃ õ ɔ̃ ũ ʊ̃ ə ə̃ ",
			UR: ['næ', 'næmɪ', 'fɑɡmɛ', 'tærmo', 'θoɡmæ', 'ʃɪlno', 'tɑɡmɪ', 'θərmal', 'larmʊ', 'ɡeɡnʊ', 'lɑnɑʃ', 'ʃɛɡner', 'kɑnnus', 'piɡmæ', 'sɪɡnus', 'nʊno', 'mok', 'θɪɡməp', 'mɔmɡoj', 'mæja', 'mæ', 'fɛnnɔk', 'ʃɛɡnɑ', 'ɡæɡnəm', 'kaɡɡeθ', 'fɑs', 'luktas', 'tottup', 'ti', 'le', 'tɔl', 'sopɪ', 'fɑfa', 'sur', 'kas', 'fɑɡo', 'ɡilpo', 'rurtɔt', 'kɪtaf', 'tiɡlʊs'] ,
			SR: ['næ̃', 'næ̃mɪ̃', 'fɑɡmɛ̃', 'tærmõ', 'θoɡmæ̃', 'ʃɪlnõ', 'tɑɡmɪ̃', 'θərmãl', 'larmʊ̃', 'ɡeɡnʊ̃', 'lɑnɑ̃ʃ', 'ʃɛɡnẽr', 'kɑnnũs', 'piɡmæ̃', 'sɪɡnũs', 'nʊ̃nõ', 'mõk', 'θɪɡmə̃p', 'mɔ̃mɡoj', 'mæ̃ja', 'mæ̃', 'fɛnnɔ̃k', 'ʃɛɡnɑ̃', 'ɡæɡnə̃m', 'kaɡɡeθ', 'fɑs', 'luktas', 'tottup', 'ti', 'le', 'tɔl', 'sopɪ', 'fɑfa', 'sur', 'kas', 'fɑɡo', 'ɡilpo', 'rurtɔt', 'kɪtaf', 'tiɡlʊs'] ,
			gloss:  ['white', 'slide', 'thick', 'obtain', 'puppy', 'quit', 'good', 'bull', 'one', 'forget', 'rain', 'chickpea', 'not', 'morning', 'shut', 'each', 'island', 'yell', 'they (fem)', 'carry', 'toe', 'smoke', 'nephew', 'clear', 'shark', 'finish', 'depend on', 'mango', 'blackberry', 'watch', 'mustard', 'what', 'purple', 'daughter', 'young', 'brother', 'shoulder', 'sleep', 'tomato', 'gourd'] ,
			ruleTxt: " progressive vowel nasalization"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g f θ s ʃ x m n ŋ r w j i e ɔ o u æ a ɑ ",
			ruleType: "Alternating",
			poi: "ɛ æ a ɑ ʌ ə ",
			UR: ['fækta', 'pæɡra', 'ŋæ', 'ʃænbæ', 'mɔsʃɑ', 'ʃofsɑ', 'ŋidra', 'sanda', 'ja', 'ɡæɡra', 'tɑ', 'ɡobda', 'kærma', 'redwæ', 'ŋudrɑ', 'mirsæ', 'bæŋʃɑ', 'wɑʃpɑ', 'rafɑ', 'daʃfæ', 'kas', 'dænrud', 'θepθas', 'ŋaʃθuʃ', 'wakpɑθ', 'sæɡ', 'tæʃʃuj', 'θæθax', 'næŋɡam', 'narbɑs', 'ŋɑŋ', 'pæpær', 'paɡ', 'radnaθ', 'mæŋθi', 'θubnan', 'jobdɔ', 'fixθut', 'ŋek', 'kikko'] ,
			SR: ['fæktə', 'pæɡrə', 'ŋɛ', 'ʃænbɛ', 'mɔsʃʌ', 'ʃofsʌ', 'ŋidrə', 'sandə', 'jə', 'ɡæɡrə', 'tʌ', 'ɡobdə', 'kærmə', 'redwɛ', 'ŋudrʌ', 'mirsɛ', 'bæŋʃʌ', 'wɑʃpʌ', 'rafʌ', 'daʃfɛ', 'kas', 'dænrud', 'θepθas', 'ŋaʃθuʃ', 'wakpɑθ', 'sæɡ', 'tæʃʃuj', 'θæθax', 'næŋɡam', 'narbɑs', 'ŋɑŋ', 'pæpær', 'paɡ', 'radnaθ', 'mæŋθi', 'θubnan', 'jobdɔ', 'fixθut', 'ŋek', 'kikko'] ,
			gloss:  ['vegetable', 'quit', 'wish', 'meal', 'spicy', 'fruit bat', 'say', 'red', 'change', 'like', 'mother', 'berry', 'arrive', 'this', 'smell', 'much', 'damp', 'argue', 'stone', 'each', 'he/she', 'zero', 'pay', 'decide', 'acquire', 'they (fem)', 'root', 'woman', 'pea', 'feed', 'forget', 'oil', 'nose', 'throat', 'dark', 'inland', 'watermelon', 'forefinger', 'owl', 'aunt'] ,
			ruleTxt: " word-final raising of low vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ m n l i ɪ e ɛ ɔ o ʊ u æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ĩ ɪ̃ ẽ ɛ̃ æ̃ ã ɑ̃ õ ɔ̃ ũ ʊ̃ ",
			UR: ['na', 'moltɛl', 'nʊmpʊ', 'mɪmza', 'vʊʒnɔ', 'nælmɛ', 'medɡɔʒ', 'nɛnðɛf', 'nɔkɪn', 'nʊ', 'nɑnʃu', 'ðaðnɪf', 'ʔimi', 'ɡivne', 'zɔvmab', 'nʊðɛ', 'θʊlnɪ', 'mɑpsɑ', 'mublab', 'mæmvɪd', 'pʊlmu', 'ʒɔðmo', 'mɪfʔæ', 'mænnu', 'ʔɑ', 'ʃoθʔɪ', 'foðɑθ', 'tænpem', 'θeð', 'kʊnzɪ', 'ki', 'pɔko', 'ʔeʔpɛ', 'buθ', 'tifɪd', 'ðɑz', 'pɑdlɑ', 'dʊftɑ', 'ʃʊlæ', 'ʃæʃʔɑd'] ,
			SR: ['nã', 'mõltɛl', 'nʊ̃mpʊ', 'mɪ̃mza', 'vʊʒnɔ̃', 'næ̃lmɛ̃', 'mẽdɡɔʒ', 'nɛ̃nðɛf', 'nɔ̃kɪn', 'nʊ̃', 'nɑ̃nʃu', 'ðaðnɪ̃f', 'ʔimĩ', 'ɡivnẽ', 'zɔvmãb', 'nʊ̃ðɛ', 'θʊlnɪ̃', 'mɑ̃psɑ', 'mũblab', 'mæ̃mvɪd', 'pʊlmũ', 'ʒɔðmõ', 'mɪ̃fʔæ', 'mæ̃nnũ', 'ʔɑ', 'ʃoθʔɪ', 'foðɑθ', 'tænpem', 'θeð', 'kʊnzɪ', 'ki', 'pɔko', 'ʔeʔpɛ', 'buθ', 'tifɪd', 'ðɑz', 'pɑdlɑ', 'dʊftɑ', 'ʃʊlæ', 'ʃæʃʔɑd'] ,
			gloss:  ['ocean', 'wife', 'day', 'dry', 'snow', 'pumpkin', 'father', 'two', 'oil', 'black', 'full', 'open', 'nowhere', 'hope', 'soup', 'dark', 'sell', 'tiger', 'come', 'smooth', 'strawberry', 'puppy', 'it', 'turtle', 'falafel', 'where', 'each', 'eyelash', 'see', 'ash', 'baby', 'moss', 'decide', 'much', 'woman', 'wheat', 'you (sg)', 'stand', 'thumb', 'become'] ,
			ruleTxt: " progressive vowel nasalization"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g f v θ ð s z ʃ ʒ x ɣ m n ŋ r l w j i ɪ e ɛ ɔ o ʊ u ə æ ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ ɑ o ɔ u ʊ ə i̥ ɪ̥ e̥ ɛ̥ æ̥ ɑ̥ o̥ ɔ̥ u̥ ʊ̥ ə̥ ",
			UR: ['ŋɔ', 'sæftɔ', 'je', 'wu', 'rutɑ', 'sɔʃpə', 'ɡʊlwɔ', 'vuɡɛ', 'vɑsku', 'pɪlʒo', 'ɣɛ', 'θɛ', 'ʒɪʒŋɔ', 'doxfɛ', 'nezvu', 'təlwe', 'pʊʃʃu', 'rɔbzɑ', 'mɛdwu', 'mozu', 'ɣinwɪ', 'bivɡɔ', 'ðæxfe', 'vi', 'xɪlpoŋ', 'niptoj', 'ʒos', 'θuz', 'sosot', 'mɪntuk', 'ðɔʒlɪj', 'ʃɛðʒɛɡ', 'ɣæs', 'ʃɔnləv', 'rɪrop', 'pɔznæp', 'vɑnʒuð', 'vɔxfəz', 'wum', 'ʃiftɛj'] ,
			SR: ['ŋɔ̥', 'sæftɔ̥', 'je̥', 'wu̥', 'rutɑ̥', 'sɔʃpə̥', 'ɡʊlwɔ̥', 'vuɡɛ̥', 'vɑsku̥', 'pɪlʒo̥', 'ɣɛ̥', 'θɛ̥', 'ʒɪʒŋɔ̥', 'doxfɛ̥', 'nezvu̥', 'təlwe̥', 'pʊʃʃu̥', 'rɔbzɑ̥', 'mɛdwu̥', 'mozu̥', 'ɣinwɪ̥', 'bivɡɔ̥', 'ðæxfe̥', 'vi̥', 'xɪlpoŋ', 'niptoj', 'ʒos', 'θuz', 'sosot', 'mɪntuk', 'ðɔʒlɪj', 'ʃɛðʒɛɡ', 'ɣæs', 'ʃɔnləv', 'rɪrop', 'pɔznæp', 'vɑnʒuð', 'vɔxfəz', 'wum', 'ʃiftɛj'] ,
			gloss:  ['coriander', 'one', 'west', 'waterfall', 'bean', 'parrot', 'niece', 'corn', 'damp', 'tomato', 'insect', 'direction', 'person', 'we', 'two', 'dream', 'twist', 'sip', 'flesh', 'point', 'call', 'fire', 'morning', 'each', 'sand', 'old', 'kill', 'allow', 'hot', 'beach', 'turtle', 'sister', 'white', 'nobody', 'sun', 'find', 'rough', 'she', 'trade', 'murky'] ,
			ruleTxt: " word-final vowel devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f θ s m n ŋ r l w j i ɪ e ɛ ɔ o ʊ u ə a ",
			ruleType: "Neutralizing",
			poi: "i ɪ e ɛ o ɔ u ʊ ə ",
			UR: ['tɛtθe', 'jɛd͡ʒre', 'ŋo', 'nɛwo', 'weθsɛ', 'ŋɔdrɔ', 'pɛnfo', 'wot͡ʃθo', 'lodde', 'təɡd͡ʒɔ', 'ɡəlto', 'ɡəbmɔ', 'θitθɛ', 't͡ʃɔlre', 't͡ʃomt͡ʃɛ', 'd͡ʒɔd͡ʒbo', 'pə', 'tɪftə', 'semjə', 'də', 'ŋəɡɡəp', 'sɪθθɛf', 'weŋsɛj', 'kɔpkik', 'pɔsfɛl', 'boljɔt͡ʃ', 'mɔd͡ʒmɔd͡ʒ', 't͡ʃʊt͡ʃθɔj', 'dudɡot', 'ŋɛbnɛt', 'fɔkfəɡ', 'kod͡ʒɪ', 'jɔbɡɔj', 'ŋɔw', 'lɔd', 'lorɛθ', 'tum', 'kijʊ', 'ɡʊɡjaŋ', 'θasa'] ,
			SR: ['tɛtθi', 'jɛd͡ʒri', 'ŋu', 'nɛwu', 'weθsɪ', 'ŋɔdrʊ', 'pɛnfu', 'wot͡ʃθu', 'loddi', 'təɡd͡ʒʊ', 'ɡəltu', 'ɡəbmʊ', 'θitθɪ', 't͡ʃɔlri', 't͡ʃomt͡ʃɪ', 'd͡ʒɔd͡ʒbu', 'pə', 'tɪftə', 'semjə', 'də', 'ŋəɡɡəp', 'sɪθθɛf', 'weŋsɛj', 'kɔpkik', 'pɔsfɛl', 'boljɔt͡ʃ', 'mɔd͡ʒmɔd͡ʒ', 't͡ʃʊt͡ʃθɔj', 'dudɡot', 'ŋɛbnɛt', 'fɔkfəɡ', 'kod͡ʒɪ', 'jɔbɡɔj', 'ŋɔw', 'lɔd', 'lorɛθ', 'tum', 'kijʊ', 'ɡʊɡjaŋ', 'θasa'] ,
			gloss:  ['fresh', 'preach', 'argue', 'goose', 'we (incl)', 'watch', 'rain', 'skin', 'evil', 'moon', 'he/she', 'child', 'which', 'barley', 'beaver', 'lion', 'neck', 'fire', 'five', 'snake', 'hate', 'lie down', 'ear', 'wet', 'coastline', 'come', 'tree bark', 'tribe', 'that', 'not', 'hill', 'insect', 'day', 'heavy', 'purple', 'face', 'they (masc)', 'grey', 'obtain', 'apple'] ,
			ruleTxt: " word-final raising of mid vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f θ s ʃ n ŋ l j i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ĩ ɪ̃ ẽ ɛ̃ æ̃ ã ɑ̃ õ ɔ̃ ũ ʊ̃ ə ə̃ ",
			UR: ['naŋnit', 'niɡŋʊ', 'kɔŋu', 'd͡ʒɛnun', 'ŋet', 'nali', 'ŋid͡ʒbəɡ', 'næt͡ʃi', 'ŋinnɑp', 'nʊd', 'næd͡ʒjot', 'lænɔ', 'ne', 'fɑɡno', 'jinŋa', 'dədŋɔd͡ʒ', 'kid͡ʒŋo', 'nəlla', 'θɛd͡ʒŋed͡ʒ', 'nedje', 'ŋʊ', 't͡ʃɛbŋæ', 'ŋujə', 'tɔdŋæ', 'pæsteb', 'sɪθpæ', 'ɡɛtti', 'sɑnɡəɡ', 'ʃɔθʊf', 'sɑt͡ʃso', 'd͡ʒɪ', 'lʊd͡ʒʊŋ', 't͡ʃʊnki', 'fʊfo', 'θɑɡ', 'lɪbd͡ʒɪ', 'ɡupt͡ʃɑ', 'ʃɪsθe', 'bʊlʊ', 'lelθan'] ,
			SR: ['nãŋnĩt', 'nĩɡŋʊ̃', 'kɔŋũ', 'd͡ʒɛnũn', 'ŋẽt', 'nãli', 'ŋĩd͡ʒbəɡ', 'næ̃t͡ʃi', 'ŋĩnnɑ̃p', 'nʊ̃d', 'næ̃d͡ʒjot', 'lænɔ̃', 'nẽ', 'fɑɡnõ', 'jinŋã', 'dədŋɔ̃d͡ʒ', 'kid͡ʒŋõ', 'nə̃lla', 'θɛd͡ʒŋẽd͡ʒ', 'nẽdje', 'ŋʊ̃', 't͡ʃɛbŋæ̃', 'ŋũjə', 'tɔdŋæ̃', 'pæsteb', 'sɪθpæ', 'ɡɛtti', 'sɑnɡəɡ', 'ʃɔθʊf', 'sɑt͡ʃso', 'd͡ʒɪ', 'lʊd͡ʒʊŋ', 't͡ʃʊnki', 'fʊfo', 'θɑɡ', 'lɪbd͡ʒɪ', 'ɡupt͡ʃɑ', 'ʃɪsθe', 'bʊlʊ', 'lelθan'] ,
			gloss:  ['rabbit', 'prepare', 'ancestor', 'lentil', 'ketchup', 'broken', 'ocean', 'tree bark', 'red', 'tell', 'llama', 'yellow', 'wolf', 'fist', 'father', 'he', 'they (masc)', 'dry', 'listen', 'most', 'become', 'fruit', 'that', 'bird', 'remember', 'swallow', 'blue', 'barley', 'zero', 'smooth', 'tiger', 'juice', 'son', 'throw', 'you (pl)', 'street', 'forest', 'avoid', 'urine', 'all'] ,
			ruleTxt: " progressive vowel nasalization"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h x ɣ n ŋ r l w j i ɛ ɔ u ə a ",
			ruleType: "Mixed",
			poi: "f v θ ð s z ʃ ʒ x ɣ h ɦ ",
			UR: ['ɡɔnʃə', 'tɔnfɛf', 'ʃanθit', 'ŋənhaɡ', 'ʃiŋsə', 'ʒɛnsi', 'ʃəŋsaʃ', 'duŋfiz', 'ɣɔŋha', 'ʒanfə', 'fɔnsu', 'ʃɛŋxə', 'hɔnhə', 'θɛŋʃi', 'ðuŋsuv', 'jɛnfa', 'hɔnʃɔ', 'sɛŋfə', 'xanxɛs', 'faŋsu', 'hɛ', 'nəθir', 'hɛh', 'θuɡðɛ', 'ʃɔʃɛ', 'raʃpɛf', 'faɡnə', 'θɔrhər', 'θabla', 'haxkɛj', 'ʃi', 'zaθɔf', 'ɡɛɣʒɛθ', 'haθθɔ', 'fɔhɔj', 'd͡ʒɛhɛ', 'nɛŋbu', 'vɔptə', 'ridjəj', 'ʒəp'] ,
			SR: ['ɡɔnʒə', 'tɔnvɛf', 'ʃanðit', 'ŋənɦaɡ', 'ʃiŋzə', 'ʒɛnzi', 'ʃəŋzaʃ', 'duŋviz', 'ɣɔŋɦa', 'ʒanvə', 'fɔnzu', 'ʃɛŋɣə', 'hɔnɦə', 'θɛŋʒi', 'ðuŋzuv', 'jɛnva', 'hɔnʒɔ', 'sɛŋvə', 'xanɣɛs', 'faŋzu', 'hɛ', 'nəθir', 'hɛh', 'θuɡðɛ', 'ʃɔʃɛ', 'raʃpɛf', 'faɡnə', 'θɔrhər', 'θabla', 'haxkɛj', 'ʃi', 'zaθɔf', 'ɡɛɣʒɛθ', 'haθθɔ', 'fɔhɔj', 'd͡ʒɛhɛ', 'nɛŋbu', 'vɔptə', 'ridjəj', 'ʒəp'] ,
			gloss:  ['arrive', 'clear', 'slither', 'when', 'nowhere', 'damp', 'hide', 'agree', 'he/she', 'ash', 'walnut', 'hate', 'cucumber', 'lift', 'cousin', 'coyote', 'finger', 'skin', 'cook', 'coriander', 'street', 'you (dual)', 'sibling', 'awaken', 'call', 'oats', 'finish', 'heavy', 'one', 'ice', 'good', 'buy', 'they', 'father', 'warm', 'food', 'flea', 'husband', 'tongue', 'lemon'] ,
			ruleTxt: " postnasal voicing of fricatives"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ h m n ŋ r w j i ɛ o u æ ɑ ",
			ruleType: "Mixed",
			poi: "f v θ ð s z ʃ ʒ h ɦ ",
			UR: ['θimʃɛ', 't͡ʃænhɑ', 'sonfɑ', 'fɑnʃɑɡ', 'd͡ʒɑŋsæʃ', 'd͡ʒɑnhuf', 'vomsɑ', 'minfæ', 'vuŋʃɛn', 'hɛmfof', 'rinθi', 'ʔumθo', 'ʃoŋθi', 'ʔɛnʃæf', 'ʃɛnfæh', 'fɛŋθi', 'fɛŋhɛt͡ʃ', 'sæmθi', 'ʃumʃuʃ', 'ŋænʃɑ', 'θɛp', 'ɡusfo', 'hond͡ʒɛv', 'θir', 'ʃæsɛ', 'ʒɑʃhɑ', 'hɑ', 'hɛθɑ', 'joθkoʃ', 'hæŋɛ', 't͡ʃohhɑm', 'sɛ', 'hɛʒɑd͡ʒ', 'hud͡ʒd͡ʒo', 'θɛt͡ʃɑh', 'θɛzit͡ʃ', 'rɛmvɛ', 'ju', 'ʒudu', 'kæðriʔ'] ,
			SR: ['θimʒɛ', 't͡ʃænɦɑ', 'sonvɑ', 'fɑnʒɑɡ', 'd͡ʒɑŋzæʃ', 'd͡ʒɑnɦuf', 'vomzɑ', 'minvæ', 'vuŋʒɛn', 'hɛmvof', 'rinði', 'ʔumðo', 'ʃoŋði', 'ʔɛnʒæf', 'ʃɛnvæh', 'fɛŋði', 'fɛŋɦɛt͡ʃ', 'sæmði', 'ʃumʒuʃ', 'ŋænʒɑ', 'θɛp', 'ɡusfo', 'hond͡ʒɛv', 'θir', 'ʃæsɛ', 'ʒɑʃhɑ', 'hɑ', 'hɛθɑ', 'joθkoʃ', 'hæŋɛ', 't͡ʃohhɑm', 'sɛ', 'hɛʒɑd͡ʒ', 'hud͡ʒd͡ʒo', 'θɛt͡ʃɑh', 'θɛzit͡ʃ', 'rɛmvɛ', 'ju', 'ʒudu', 'kæðriʔ'] ,
			gloss:  ['begin', 'eat', 'sea', 'snow', 'puppy', 'learn', 'change', 'chin', 'read', 'falafel', 'this', 'road', 'person', 'spicy', 'aunt', 'day', 'grey', 'blueberry', 'inland', 'ear', 'pumpkin', 'family', 'not', 'rabbit', 'spouse', 'sand', 'owl', 'beach', 'lie down', 'they (neut)', 'horse', 'tongue', 'lift', 'knee', 'tiger', 'moss', 'waist', 'threaten', 'sleep', 'say'] ,
			ruleTxt: " postnasal voicing of fricatives"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ θ ð s z ʃ ʒ x ɣ m n ŋ r l w j i ɪ e ɛ ɔ o ʊ u ə a ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ a o ɔ u ʊ ə i̥ ɪ̥ e̥ ɛ̥ ḁ o̥ ɔ̥ u̥ ʊ̥ ə̥ ",
			UR: ['doxu', 'jɪsθu', 't͡ʃɛ', 'zɛθe', 'lɔlʔe', 'ʔəpto', 'sɔʃxi', 't͡ʃɛt͡ʃi', 'duxsɔ', 'wəlʔi', 'pʊtt͡ʃo', 'dʊkku', 'saʔe', 'zɔʃkə', 'θʊtɔ', 'ɡoθxə', 'ʔɛʔo', 'pɔ', 'kɛʃʔə', 'ʔɛnpi', 'ke', 'beta', 'ʔekɛ', 'jɪʔɔ', 'ɡuxseʔ', 'sʊɣlɛ', 'pekt͡ʃed͡ʒ', 'səɣŋɛ', 'bɪʃkun', 't͡ʃʊpʔut͡ʃ', 'ʔʊl', 'pɛmɪ', 'wʊ', 'lidnə', 'kɔmʊ', 'ðunɔ', 'rɛ', 'jɛbʊ', 'piɣro', 'd͡ʒabbu'] ,
			SR: ['doxu̥', 'jɪsθu̥', 't͡ʃɛ̥', 'zɛθe̥', 'lɔlʔe̥', 'ʔəpto̥', 'sɔʃxi̥', 't͡ʃɛt͡ʃi̥', 'duxsɔ̥', 'wəlʔi̥', 'pʊtt͡ʃo̥', 'dʊkku̥', 'saʔe̥', 'zɔʃkə̥', 'θʊtɔ̥', 'ɡoθxə̥', 'ʔɛʔo̥', 'pɔ̥', 'kɛʃʔə̥', 'ʔɛnpi̥', 'ke̥', 'betḁ', 'ʔekɛ̥', 'jɪʔɔ̥', 'ɡuxseʔ', 'sʊɣlɛ', 'pekt͡ʃed͡ʒ', 'səɣŋɛ', 'bɪʃkun', 't͡ʃʊpʔut͡ʃ', 'ʔʊl', 'pɛmɪ', 'wʊ', 'lidnə', 'kɔmʊ', 'ðunɔ', 'rɛ', 'jɛbʊ', 'piɣro', 'd͡ʒabbu'] ,
			gloss:  ['alligator', 'day', 'mango', 'head', 'they (neut)', 'road', 'swim', 'star', 'claw', 'mouse', 'each', 'fire', 'argue', 'grass', 'choose', 'sauce', 'tooth', 'hug', 'some', 'stir', 'arrive', 'lose', 'quit', 'dinner', 'murky', 'blueberry', 'salmon', 'sibling', 'red', 'remember', 'bad', 'five', 'wife', 'almond', 'digest', 'bumpy', 'sit', 'scorpion', 'pumpkin', 'fur'] ,
			ruleTxt: " word-final vowel devoicing after voiceless consonants"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ h m n ŋ r i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ə i̥ ɪ̥ e̥ ɛ̥ æ̥ ḁ ɑ̥ o̥ ɔ̥ u̥ ʊ̥ ə̥ ",
			UR: ['hebzi', 'rɪdɡʊ', 'θɪŋɔ', 'zɪdʒə', 'hɑbrɛ', 'fʊʃsɔ', 'nu', 'ʔɛdʊ', 'ðʊrʊ', 'vɪtkæ', 'ʔɔrhæ', 'tʊθɪ', 'zɔ', 'fɛðbə', 'θæ', 'ʒuʃsi', 'dɛrʒʊ', 'həmda', 'haʃkɑ', 'nɑŋɛ', 'sʊrhɛ', 'binni', 'dəzmɑ', 'kəvðɛ', 'vʊʃtɑʃ', 'tuf', 'fæməz', 'θeθ', 'vɛʃhɔp', 'zɪθpəb', 'ŋomrəʔ', 'tɔm', 'rɪtam', 'virrʊn', 'ŋɪn', 'ŋeʒŋup', 'nenhɔz', 'ðeðrɪʒ', 'zap', 'niɡʒʊr'] ,
			SR: ['hebzi̥', 'rɪdɡʊ̥', 'θɪŋɔ̥', 'zɪdʒə̥', 'hɑbrɛ̥', 'fʊʃsɔ̥', 'nu̥', 'ʔɛdʊ̥', 'ðʊrʊ̥', 'vɪtkæ̥', 'ʔɔrhæ̥', 'tʊθɪ̥', 'zɔ̥', 'fɛðbə̥', 'θæ̥', 'ʒuʃsi̥', 'dɛrʒʊ̥', 'həmdḁ', 'haʃkɑ̥', 'nɑŋɛ̥', 'sʊrhɛ̥', 'binni̥', 'dəzmɑ̥', 'kəvðɛ̥', 'vʊʃtɑʃ', 'tuf', 'fæməz', 'θeθ', 'vɛʃhɔp', 'zɪθpəb', 'ŋomrəʔ', 'tɔm', 'rɪtam', 'virrʊn', 'ŋɪn', 'ŋeʒŋup', 'nenhɔz', 'ðeðrɪʒ', 'zap', 'niɡʒʊr'] ,
			gloss:  ['bite', 'cucumber', 'hair', 'accuse', 'most', 'I', 'ask', 'sea', 'midday ', 'she', 'torso', 'grain', 'use', 'grow', 'sauce', 'carrot', 'cry', 'brown', 'south', 'think', 'read', 'eye', 'coastline', 'smooth', 'kneel', 'pull', 'every', 'enter', 'elbow', 'path', 'brother', 'nail', 'ancestor', 'kitten', 'lentil', 'decide', 'when', 'woman', 'seed', 'jaw'] ,
			ruleTxt: " word-final vowel devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ θ ð s z ʃ ʒ h x ɣ m n l w j i u a ",
			ruleType: "Alternating",
			poi: "ç ʝ x ɣ ",
			UR: ['ɡiɣa', 'zixha', 'piθiɣ', 'ɣiɣaɡ', 'xiɣɣi', 'ʃut͡ʃiɣ', 'diɣ', 'liɣɣuɣ', 'xiɣbuɣ', 'jiɣdup', 'ɣixaw', 'ʒimʃix', 'ʒix', 'miɣʒa', 'ðiɣu', 'ʃixiʔ', 'siɣɣad͡ʒ', 'ðizlix', 'ɣanʔix', 'kamʒix', 'd͡ʒushaɣ', 'xunxu', 'ɣit͡ʃt͡ʃi', 't͡ʃuʔxuɣ', 'xaθhuɣ', 'xalsi', 'munɣud', 'xaʔi', 'ɣimðax', 't͡ʃuɣzuɣ', 'ɣibd͡ʒa', 'ʃaɣɣi', 'ðuxʔuɣ', 'ʔamxu', 'zuxpaz', 'ɣilxi', 'θinkut͡ʃ', 'hiʃt͡ʃa', 'hiʒ', 'mibiɡ'] ,
			SR: ['ɡiʝa', 'ziçha', 'piθiʝ', 'ɣiʝaɡ', 'xiʝɣi', 'ʃut͡ʃiʝ', 'diʝ', 'liʝɣuɣ', 'xiʝbuɣ', 'jiʝdup', 'ɣiçaw', 'ʒimʃiç', 'ʒiç', 'miʝʒa', 'ðiʝu', 'ʃiçiʔ', 'siʝɣad͡ʒ', 'ðizliç', 'ɣanʔiç', 'kamʒiç', 'd͡ʒushaɣ', 'xunxu', 'ɣit͡ʃt͡ʃi', 't͡ʃuʔxuɣ', 'xaθhuɣ', 'xalsi', 'munɣud', 'xaʔi', 'ɣimðax', 't͡ʃuɣzuɣ', 'ɣibd͡ʒa', 'ʃaɣɣi', 'ðuxʔuɣ', 'ʔamxu', 'zuxpaz', 'ɣilxi', 'θinkut͡ʃ', 'hiʃt͡ʃa', 'hiʒ', 'mibiɡ'] ,
			gloss:  ['learn', 'black', 'nephew', 'believe', 'three', 'say', 'soybean', 'mustard', 'ox', 'foot', 'dislike', 'some', 'bite', 'fruit bat', 'adjust', 'kneel', 'lemon', 'quit', 'sun', 'fish', 'tomato', 'dry', 'spouse', 'forgive', 'oil', 'salamander', 'baby', 'grass', 'hand', 'bake', 'experience', 'rough', 'sister', 'lake', 'they (neut)', 'white', 'cold', 'butterfly', 'person', 'mother'] ,
			ruleTxt: " palatalization of velar fricatives after high front vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ h x ɣ m n ŋ l w j i o u æ ɑ ",
			ruleType: "Neutralizing",
			poi: "p b f v t d θ ð s z ʃ ʒ k g x ɣ ",
			UR: ['ɣiɡɣob', 'sid', 'zuʒ', 'dɑpuv', 'tiɡ', 'væpʔið', 'vɑmkoɡ', 'bæɣ', 'wuɣbud', 'bozod', 'zɑxkɑʒ', 'ɣæzoð', 'boŋzuʒ', 'ɣixiɣ', 'jæbʒuv', 'zænbæz', 'ʃifiɣ', 'ðib', 'fɑfsæʒ', 'ðotθuv', 'sæʒæ', 'vidɣiʃ', 'ʒævŋu', 'ʒif', 'væɣmi', 'vovŋɑ', 'ʒumdu', 'biʒɑ', 'ðiku', 'ɣæ', 'pæɣuj', 'dusʔæ', 'ʃɑʒwif', 'domŋi', 'ðæ', 'doŋwo', 'wæθ', 'nunʔi', 'juθik', 'juʔpi'] ,
			SR: ['ɣiɡɣop', 'sit', 'zuʃ', 'dɑpuf', 'tik', 'væpʔiθ', 'vɑmkok', 'bæx', 'wuɣbut', 'bozot', 'zɑxkɑʃ', 'ɣæzoθ', 'boŋzuʃ', 'ɣixix', 'jæbʒuf', 'zænbæs', 'ʃifix', 'ðip', 'fɑfsæʃ', 'ðotθuf', 'sæʒæ', 'vidɣiʃ', 'ʒævŋu', 'ʒif', 'væɣmi', 'vovŋɑ', 'ʒumdu', 'biʒɑ', 'ðiku', 'ɣæ', 'pæɣuj', 'dusʔæ', 'ʃɑʒwif', 'domŋi', 'ðæ', 'doŋwo', 'wæθ', 'nunʔi', 'juθik', 'juʔpi'] ,
			gloss:  ['damp', 'wish', 'fight', 'fur', 'arrive', 'like', 'every', 'hedgehog', 'rain', 'coyote', 'you (dual)', 'rye', 'nail', 'morning', 'chickpea', 'calf', 'look', 'evil', 'those', 'drink', 'daughter', 'arm', 'lion', 'uncle', 'heavy', 'earlobe', 'kneel', 'understand', 'finish', 'cut', 'lose', 'we (incl)', 'tongue', 'he', 'fresh', 'ocean', 'dim', 'what', 'sister', 'tree bark'] ,
			ruleTxt: " word-final obstruent devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g f v θ ð s z ʃ ʒ x ɣ m n l i e ɛ ɔ o u a ",
			ruleType: "Neutralizing",
			poi: "p b t d k g ",
			UR: ['ɡikpub', 'ɣad', 'lad', 'bafxɔd', 'zeb', 'ɡɔɡ', 'ɡaftɔb', 'ɡɔb', 'bɛd', 'dezuɡ', 'dɛsab', 'sɔmɛɡ', 'lɛd', 'kɔbuɡ', 'vɛnʃɛɡ', 'feb', 'doɡ', 'ɡimðab', 'mob', 'ɡoðlɔb', 'bɔsfɔ', 'dɛbdoz', 'ɡonbɛn', 'bilðuθ', 'pɛndo', 'vuɡduʒ', 'ɡive', 'saldo', 'diʃθa', 'ɡelɡo', 'du', 'pabɡo', 'biɡzov', 'ʒɛbi', 'θibʒi', 'dɔkev', 'xaɣvɔ', 'saʒlat', 'ɣalzɛ', 'xeɣif'] ,
			SR: ['ɡikpup', 'ɣat', 'lat', 'bafxɔt', 'zep', 'ɡɔk', 'ɡaftɔp', 'ɡɔp', 'bɛt', 'dezuk', 'dɛsap', 'sɔmɛk', 'lɛt', 'kɔbuk', 'vɛnʃɛk', 'fep', 'dok', 'ɡimðap', 'mop', 'ɡoðlɔp', 'bɔsfɔ', 'dɛbdoz', 'ɡonbɛn', 'bilðuθ', 'pɛndo', 'vuɡduʒ', 'ɡive', 'saldo', 'diʃθa', 'ɡelɡo', 'du', 'pabɡo', 'biɡzov', 'ʒɛbi', 'θibʒi', 'dɔkev', 'xaɣvɔ', 'saʒlat', 'ɣalzɛ', 'xeɣif'] ,
			gloss:  ['watermelon', 'honey', 'expect', 'mother', 'talk', 'we (dual)', 'you (sg)', 'return', 'valley', 'surprise', 'learn', 'torso', 'bring', 'enjoy', 'aunt', 'change', 'storm', 'camel', 'broken', 'earth', 'finger', 'chin', 'he/she', 'bird', 'digest', 'argue', 'salamander', 'feel', 'hide', 'play', 'they (dual)', 'kill', 'all', 'sea', 'hedgehog', 'flat', 'trade', 'face', 'scorpion', 'sun'] ,
			ruleTxt: " word-final consonant devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ θ ð s z ʃ ʒ n ŋ r w i e ɔ o u a ",
			ruleType: "Mixed",
			poi: "b β d z g ɣ ",
			UR: ['ŋutkiɡ', 'ŋoɡu', 'boɡred', 'ʒoʔʔɔb', 'sabe', 'deɡɡu', 'ɡab', 'ʔudŋuθ', 'sɔdd͡ʒɔw', 'dut͡ʃt͡ʃud', 'neðɡaɡ', 'kuɡɡob', 'd͡ʒadɡa', 'ɡot͡ʃt͡ʃɔd', 'ðapeb', 'ɡoɡ', 'ʒabdo', 'bidruŋ', 'daŋθeɡ', 'bobɔ', 'berbi', 'bekʔo', 'derpɔ', 'ɡaŋwɔz', 'dɔ', 'dot͡ʃpu', 'bɔzdoʔ', 'bu', 'ɡa', 'ɡorku', 'bo', 'berku', 'boθta', 'depθa', 'borŋe', 'ɡurʔu', 'ŋeʒʒuk', 'ŋiθoʔ', 'ʒɔt͡ʃkep', 'ʔawe'] ,
			SR: ['ŋutkiɣ', 'ŋoɣu', 'boɣrez', 'ʒoʔʔɔβ', 'saβe', 'deɣɡu', 'ɡaβ', 'ʔuzŋuθ', 'sɔzd͡ʒɔw', 'dut͡ʃt͡ʃuz', 'neðɡaɣ', 'kuɣɡoβ', 'd͡ʒazɡa', 'ɡot͡ʃt͡ʃɔz', 'ðapeβ', 'ɡoɣ', 'ʒaβdo', 'bizruŋ', 'daŋθeɣ', 'boβɔ', 'berbi', 'bekʔo', 'derpɔ', 'ɡaŋwɔz', 'dɔ', 'dot͡ʃpu', 'bɔzdoʔ', 'bu', 'ɡa', 'ɡorku', 'bo', 'berku', 'boθta', 'depθa', 'borŋe', 'ɡurʔu', 'ŋeʒʒuk', 'ŋiθoʔ', 'ʒɔt͡ʃkep', 'ʔawe'] ,
			gloss:  ['drink', 'trade', 'find', 'roll', 'one', 'cook', 'eyebrow', 'black', 'each', 'fog', 'rock', 'barley', 'empty', 'much', 'salamander', 'sister', 'head', 'regret', 'downhill', 'river', 'brown', 'clear', 'direction', 'sesame', 'dog', 'hand', 'enter', 'vinegar', 'potato', 'foot', 'bathe', 'throat', 'bull', 'parent', 'serving', 'five', 'teach', 'forgive', 'pull', 'sleep'] ,
			ruleTxt: " postvocalic spirantization of voiced stops"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ m n w i ɪ e ɛ ɔ o ʊ u ə a ",
			ruleType: "Mixed",
			poi: "i ɪ ɨ ",
			UR: ['ʔiʔt͡ʃi', 't͡ʃi', 't͡ʃidmʊp', 'd͡ʒibɪz', 'simd͡ʒi', 'ʃiʔi', 't͡ʃiwɪ', 'ʃidd͡ʒiθ', 'ʃiɡʒɪt', 'tɛʒi', 'ɡonʒið', 't͡ʃiɡod͡ʒ', 'ðɪʒd͡ʒi', 'ʒiʃθɔθ', 'ʃid͡ʒit͡ʃ', 't͡ʃizdɪ', 'ʒɪt͡ʃ', 'd͡ʒɪnpiʔ', 'ʃɪnʒɪt', 'd͡ʒɪn', 'ʃukθɪz', 'd͡ʒantɪ', 'ðɪvmap', 'sit', 'ʔɪzi', 'sɪz', 'sɪʔsi', 'vɪnðe', 'pimzim', 'dasfɪ', 'ʒudɡiw', 'sɪsom', 'pɪɡ', 'pimmif', 'ʔopkib', 'bɛtɪ', 'teθʔɛ', 'ɡɛvvo', 'ðɛ', 'pəmeʔ'] ,
			SR: ['ʔiʔt͡ʃɨ', 't͡ʃɨ', 't͡ʃɨdmʊp', 'd͡ʒɨbɪz', 'simd͡ʒɨ', 'ʃɨʔi', 't͡ʃɨwɪ', 'ʃɨdd͡ʒɨθ', 'ʃɨɡʒɪt', 'tɛʒɨ', 'ɡonʒɨð', 't͡ʃɨɡod͡ʒ', 'ðɪʒd͡ʒɨ', 'ʒɨʃθɔθ', 'ʃɨd͡ʒɨt͡ʃ', 't͡ʃɨzdɪ', 'ʒɪt͡ʃ', 'd͡ʒɪnpiʔ', 'ʃɪnʒɪt', 'd͡ʒɪn', 'ʃukθɪz', 'd͡ʒantɪ', 'ðɪvmap', 'sit', 'ʔɪzi', 'sɪz', 'sɪʔsi', 'vɪnðe', 'pimzim', 'dasfɪ', 'ʒudɡiw', 'sɪsom', 'pɪɡ', 'pimmif', 'ʔopkib', 'bɛtɪ', 'teθʔɛ', 'ɡɛvvo', 'ðɛ', 'pəmeʔ'] ,
			gloss:  ['jaw', 'regret', 'repeat', 'hair', 'it', 'lemon', 'evening', 'preach', 'rain', 'listen', 'owl', 'falafel', 'green', 'eyelid', 'forehead', 'pond', 'valley', 'sit', 'fire', 'ten', 'west', 'damp', 'oil', 'we', 'think', 'white', 'hyena', 'bite', 'spinach', 'child', 'change', 'wheat', 'hot', 'gecko', 'dark', 'work', 'brother', 'acorn', 'rough', 'you (pl)'] ,
			ruleTxt: " retraction of high front vowels after postalveolars"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g f s ʃ x n ŋ l i ɪ e ɛ ɔ o ʊ u a ",
			ruleType: "Neutralizing",
			poi: "i ɪ e ɛ o ɔ u ʊ ",
			UR: ['ŋilɡɪ', 'tɪxti', 'siɡi', 'fiffʊ', 'ɡɪ', 'suku', 'kifɪ', 'xɪlɪ', 'xiɡɪ', 'ŋʊ', 'kʊɡli', 'xɛsu', 'lɪɡŋɪ', 'saɡlu', 'ŋɔɡŋɪ', 'tulti', 'su', 'ʃʊsʃʊ', 'ŋuxʊ', 'ɡʊ', 'fuɡɡɪt', 'tiɡ', 'ŋuɡ', 'lʊɡnɔf', 'ʃuxit', 'kiɡŋuɡ', 'ŋitip', 'ʃɪf', 'ʃɪs', 'ɡipan', 'ŋunɪf', 'pilnuf', 'ŋinɡɔ', 'xite', 'piɡlʊs', 'xiʃfis', 'pɔlɡɔt', 'na', 'xonta', 'sɔxkɛ'] ,
			SR: ['ŋilɡɛ', 'tɪxte', 'siɡe', 'fiffɔ', 'ɡɛ', 'suko', 'kifɛ', 'xɪlɛ', 'xiɡɛ', 'ŋɔ', 'kʊɡle', 'xɛso', 'lɪɡŋɛ', 'saɡlo', 'ŋɔɡŋɛ', 'tulte', 'so', 'ʃʊsʃɔ', 'ŋuxɔ', 'ɡɔ', 'fuɡɡɪt', 'tiɡ', 'ŋuɡ', 'lʊɡnɔf', 'ʃuxit', 'kiɡŋuɡ', 'ŋitip', 'ʃɪf', 'ʃɪs', 'ɡipan', 'ŋunɪf', 'pilnuf', 'ŋinɡɔ', 'xite', 'piɡlʊs', 'xiʃfis', 'pɔlɡɔt', 'na', 'xonta', 'sɔxkɛ'] ,
			gloss:  ['skin', 'most', 'nose', 'smooth', 'develop', 'sand', 'swim', 'dinner', 'newt', 'every', 'preach', 'dry', 'north', 'depend on', 'we', 'drink', 'push', 'hesitate', 'lip', 'grass', 'buttocks', 'bathe', 'eel', 'these', 'decide', 'leave', 'murky', 'become', 'blue/green', 'onion', 'chin', 'pea', 'beach', 'threaten', 'boil', 'nutmeg', 'dove', 'brother', 'evil', 'wheat'] ,
			ruleTxt: " word-final lowering of high vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ θ s ʃ x n ŋ r w j i e ɛ ɔ a ",
			ruleType: "Neutralizing",
			poi: "p b t d k g ʔ ",
			UR: ['pɛŋpeʃ', 'kɔnpiɡ', 'ʃenke', 'kiŋpɛ', 'biŋka', 'tɛnki', 'pɔŋte', 'ŋiŋkɔʔ', 'xanki', 'raŋtew', 'pɛnpɛ', 'ʔɛntɔb', 'tɛŋte', 'tenpɛ', 'peŋpɔ', 'kiŋpas', 'tɔnʔar', 'ŋɛnʔik', 'kɔnʔɛ', 'tɛnʔɔ', 'ʔidɛ', 'kɛʃsɛ', 'sɔbdat', 'ʔaɡni', 'ʔɛtɔw', 'piɡa', 'ʔepɛ', 'ʔeʔe', 'kɛnep', 'rertej', 'ʔaʃep', 'kiʔe', 'tiʔʃak', 'jirpap', 'kaɡŋa', 'ʔap', 'rebwɛŋ', 'beθ', 'wɔnraɡ', 'θɔ'] ,
			SR: ['pɛŋbeʃ', 'kɔnbiɡ', 'ʃenɡe', 'kiŋbɛ', 'biŋɡa', 'tɛnɡi', 'pɔŋde', 'ŋiŋɡɔʔ', 'xanɡi', 'raŋdew', 'pɛnbɛ', 'ʔɛndɔb', 'tɛŋde', 'tenbɛ', 'peŋbɔ', 'kiŋbas', 'tɔnʔar', 'ŋɛnʔik', 'kɔnʔɛ', 'tɛnʔɔ', 'ʔidɛ', 'kɛʃsɛ', 'sɔbdat', 'ʔaɡni', 'ʔɛtɔw', 'piɡa', 'ʔepɛ', 'ʔeʔe', 'kɛnep', 'rertej', 'ʔaʃep', 'kiʔe', 'tiʔʃak', 'jirpap', 'kaɡŋa', 'ʔap', 'rebwɛŋ', 'beθ', 'wɔnraɡ', 'θɔ'] ,
			gloss:  ['bad', 'accuse', 'eat', 'some', 'brother', 'why', 'quit', 'black', 'milk', 'we (excl)', 'describe', 'fresh', 'learn', 'frog', 'elbow', 'lion', 'road', 'serving', 'chin', 'cut', 'pepper', 'mother', 'walk', 'rye', 'that', 'survive', 'they (dual)', 'calf', 'cloud', 'baby', 'torso', 'knee', 'cantaloupe', 'die', 'mud', 'man', 'lose', 'bring', 'receive', 'murky'] ,
			ruleTxt: " postnasal voicing of stops"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g f v θ ð s z ʃ ʒ h x ɣ m n ŋ r i ɔ u ə a ",
			ruleType: "Alternating",
			poi: "c ɟ ç ʝ ɲ k g x ɣ ŋ ",
			UR: ['ɡiɡmu', 'zantiɡ', 'ɡəɡiɡ', 'ŋiɡna', 'kixxi', 'niʃxiŋ', 'siɡ', 'vɔŋkiɣ', 'hiŋsax', 'fiɡri', 'ŋixxiv', 'ɡuxiŋ', 'ŋiɣə', 'kiɡa', 'xik', 'θiɡŋɔ', 'taθkiɣ', 'dupxix', 'xɔdbiɣ', 'ɣiɣ', 'xu', 'ŋafkav', 'kəxɔ', 'ŋəŋit', 'ŋaʃhuh', 'θimɡuʒ', 'xaŋnəʒ', 'duŋŋa', 'ɡɔktɔ', 'ŋuʒmə', 'xɔnvə', 'xɔŋɣa', 'kimak', 'kəx', 'pəxθa', 'xasfəɡ', 'diθʃɔ', 'misə', 'pumnər', 'və'] ,
			SR: ['ɡiɟmu', 'zantiɟ', 'ɡəɡiɟ', 'ŋiɟna', 'kiçxi', 'niʃxiɲ', 'siɟ', 'vɔŋkiʝ', 'hiɲsax', 'fiɟri', 'ŋiçxiv', 'ɡuxiɲ', 'ŋiʝə', 'kiɟa', 'xic', 'θiɟŋɔ', 'taθkiʝ', 'dupxiç', 'xɔdbiʝ', 'ɣiʝ', 'xu', 'ŋafkav', 'kəxɔ', 'ŋəŋit', 'ŋaʃhuh', 'θimɡuʒ', 'xaŋnəʒ', 'duŋŋa', 'ɡɔktɔ', 'ŋuʒmə', 'xɔnvə', 'xɔŋɣa', 'kimak', 'kəx', 'pəxθa', 'xasfəɡ', 'diθʃɔ', 'misə', 'pumnər', 'və'] ,
			gloss:  ['hedgehog', 'gecko', 'cold', 'parrot', 'understand', 'nobody', 'leg', 'we', 'that', 'throat', 'oil', 'empty', 'borrow', 'rough', 'nose', 'adapt', 'they (fem)', 'fresh', 'cousin', 'pear', 'mud', 'hundred', 'much', 'night', 'acorn', 'survive', 'star', 'fox', 'beverage', 'purple', 'feed', 'road', 'hand', 'baby', 'uphill', 'blue', 'sugar', 'dry', 'clear', 'grey'] ,
			ruleTxt: " palatalization of velars after high front vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ h x ɣ m n ŋ l i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ĩ ɪ̃ ẽ ɛ̃ æ̃ ã ɑ̃ õ ɔ̃ ũ ʊ̃ ə ə̃ ",
			UR: ['mut', 'neʃtɔ', 'məx', 'nebnə', 'ɡɔmmɑ', 'ðilmʊŋ', 'kiznæʒ', 'zomuð', 'ŋuzðɑ', 'ʒudnɔ', 'ŋoθʔəʃ', 'mɛmθeŋ', 'luʒŋum', 'dɔznæʒ', 'mɛlva', 'nɛt', 'zɪŋo', 'ŋʊʒæθ', 'xelmux', 'mɑŋvɔ', 'ŋæŋsu', 'mʊtɪp', 'niʃte', 'ʔudmif', 'pɔʔʊz', 'keʔhɑb', 'ɡeɡðɛ', 'bʊŋhæ', 'tuhfɑl', 'dɪnlæh', 'vɔb', 'baɣvɔ', 'dæxtə', 'ʔoʃʃʊm', 'vʊzdɪŋ', 'ɣonbim', 'ɡɛnɣɔ', 'θahʔəm', 'vəŋhɪx', 'ho'] ,
			SR: ['mũt', 'nẽʃtɔ', 'mə̃x', 'nẽbnə̃', 'ɡɔmmɑ̃', 'ðilmʊ̃ŋ', 'kiznæ̃ʒ', 'zomũð', 'ŋũzðɑ', 'ʒudnɔ̃', 'ŋõθʔəʃ', 'mɛ̃mθeŋ', 'luʒŋũm', 'dɔznæ̃ʒ', 'mɛ̃lva', 'nɛ̃t', 'zɪŋõ', 'ŋʊ̃ʒæθ', 'xelmũx', 'mɑ̃ŋvɔ', 'ŋæ̃ŋsu', 'mʊ̃tɪp', 'nĩʃte', 'ʔudmĩf', 'pɔʔʊz', 'keʔhɑb', 'ɡeɡðɛ', 'bʊŋhæ', 'tuhfɑl', 'dɪnlæh', 'vɔb', 'baɣvɔ', 'dæxtə', 'ʔoʃʃʊm', 'vʊzdɪŋ', 'ɣonbim', 'ɡɛnɣɔ', 'θahʔəm', 'vəŋhɪx', 'ho'] ,
			gloss:  ['midday ', 'insect', 'ignore', 'yell', 'earth', 'waterfall', 'much', 'goose', 'ice', 'torso', 'bright', 'cashew', 'lizard', 'aunt', 'woman', 'feces', 'fur', 'spicy', 'wrist', 'then', 'new', 'proceed', 'heavy', 'mouth', 'husband', 'coriander', 'direction', 'west', 'dry', 'tree', 'lie down', 'vegetable', 'blackberry', 'dinner', 'laugh', 'mother', 'child', 'breathe', 'eye', 'camel'] ,
			ruleTxt: " progressive vowel nasalization"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g ʔ t͡ʃ f θ s ʃ m n ŋ l i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ĩ ɪ̃ ẽ ɛ̃ æ̃ ã ɑ̃ õ ɔ̃ ũ ʊ̃ ə ə̃ ",
			UR: ['ŋʊɡɡuk', 'ŋɪnɛ', 'ŋuŋɪ', 'mʊɡŋeŋ', 'ŋuftam', 'kɪmnuθ', 'muɡnet͡ʃ', 'mulfam', 'næmfəŋ', 'fɪɡŋæθ', 'ʔəŋi', 'seɡŋɔl', 'ŋɑʃʊk', 'mæ', 'lɑɡnæɡ', 'nəɡlaʃ', 'ɡeŋə', 'θoɡma', 'fæmŋo', 'mɔmɔ', 'nɛt͡ʃsup', 'nɑʔuɡ', 'nɛ', 'kəmɪ', 'ʔɛmse', 'somɡʊl', 'ɡəpθɑp', 'kɑpθɪ', 'ʃiŋfɑ', 'fə', 'lɑ', 'tɑnʃɔ', 'sɔfɪp', 'kəp', 'kepθɛ', 'fɑktuŋ', 'pɑɡli', 'pæt͡ʃ', 'təfθɛɡ', 'kəθt͡ʃɑθ'] ,
			SR: ['ŋʊ̃ɡɡuk', 'ŋɪ̃nɛ̃', 'ŋũŋɪ̃', 'mʊ̃ɡŋẽŋ', 'ŋũftam', 'kɪmnũθ', 'mũɡnẽt͡ʃ', 'mũlfam', 'næ̃mfəŋ', 'fɪɡŋæ̃θ', 'ʔəŋĩ', 'seɡŋɔ̃l', 'ŋɑ̃ʃʊk', 'mæ̃', 'lɑɡnæ̃ɡ', 'nə̃ɡlaʃ', 'ɡeŋə̃', 'θoɡmã', 'fæmŋõ', 'mɔ̃mɔ̃', 'nɛ̃t͡ʃsup', 'nɑ̃ʔuɡ', 'nɛ̃', 'kəmɪ̃', 'ʔɛmse', 'somɡʊl', 'ɡəpθɑp', 'kɑpθɪ', 'ʃiŋfɑ', 'fə', 'lɑ', 'tɑnʃɔ', 'sɔfɪp', 'kəp', 'kepθɛ', 'fɑktuŋ', 'pɑɡli', 'pæt͡ʃ', 'təfθɛɡ', 'kəθt͡ʃɑθ'] ,
			gloss:  ['ear', 'acorn', 'white', 'blue/green', 'head', 'he', 'tail', 'you (dual)', 'cloud', 'tooth', 'young', 'break', 'wrist', 'get', 'eyelid', 'husband', 'this', 'arrive', 'kneel', 'lose', 'lion', 'succeed', 'downhill', 'dislike', 'ancestor', 'cow', 'flat', 'hope', 'many', 'parent', 'they (masc)', 'cold', 'what', 'jaw', 'catch', 'fire', 'son', 'gravy', 'assume', 'wheat'] ,
			ruleTxt: " progressive vowel nasalization"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ θ ð s z ʃ ʒ x ɣ m n ŋ r w j i ɪ e ɛ ɔ o ʊ u ə a ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ a o ɔ u ʊ ə i̥ ɪ̥ e̥ ɛ̥ ḁ o̥ ɔ̥ u̥ ʊ̥ ə̥ ",
			UR: ['ŋet͡ʃpu', 't͡ʃaʃt͡ʃɔ', 'mexʃɔ', 'ʃɛ', 'rɛppʊ', 'ɡitkɔ', 'θo', 'ɣutka', 'sɛ', 'd͡ʒetxa', 'ɡəkʊ', 'xɛθa', 'θʊst͡ʃɛ', 'suθxa', 't͡ʃɔnʃa', 'tɪsʃɛ', 'θɔnkə', 'd͡ʒeʃθɔ', 'θɪsxə', 'pə', 'ɡot͡ʃxə', 'θupxɪ', 'nɛt͡ʃkɛ', 'zɛʃtɛ', 'tɪkxʊn', 'kawe', 'ʃadjʊr', 'kʊɣd͡ʒer', 't͡ʃerak', 't͡ʃakʃɪz', 't͡ʃuʒŋɛ', 'ðərsɛt͡ʃ', 'ŋoðo', 'wajɪ', 'ŋonɡɪ', 'ŋə', 'ɣɪ', 'deɣi', 'ɣeɡdɛ', 'zeɣjɔ'] ,
			SR: ['ŋet͡ʃpu̥', 't͡ʃaʃt͡ʃɔ̥', 'mexʃɔ̥', 'ʃɛ̥', 'rɛppʊ̥', 'ɡitkɔ̥', 'θo̥', 'ɣutkḁ', 'sɛ̥', 'd͡ʒetxḁ', 'ɡəkʊ̥', 'xɛθḁ', 'θʊst͡ʃɛ̥', 'suθxḁ', 't͡ʃɔnʃḁ', 'tɪsʃɛ̥', 'θɔnkə̥', 'd͡ʒeʃθɔ̥', 'θɪsxə̥', 'pə̥', 'ɡot͡ʃxə̥', 'θupxɪ̥', 'nɛt͡ʃkɛ̥', 'zɛʃtɛ̥', 'tɪkxʊn', 'kawe', 'ʃadjʊr', 'kʊɣd͡ʒer', 't͡ʃerak', 't͡ʃakʃɪz', 't͡ʃuʒŋɛ', 'ðərsɛt͡ʃ', 'ŋoðo', 'wajɪ', 'ŋonɡɪ', 'ŋə', 'ɣɪ', 'deɣi', 'ɣeɡdɛ', 'zeɣjɔ'] ,
			gloss:  ['chin', 'succeed', 'bright', 'apple', 'husband', 'sit', 'return', 'soup', 'evening', 'fox', 'cashew', 'nobody', 'walk', 'build', 'scream', 'argue', 'you (sg)', 'buy', 'drink', 'path', 'dream', 'kill', 'blue/green', 'woman', 'bumpy', 'sand', 'bull', 'stream', 'downhill', 'tongue', 'gecko', 'there', 'squirrel', 'cinnamon', 'love', 'skin', 'belly', 'duck', 'two', 'desert'] ,
			ruleTxt: " word-final vowel devoicing after voiceless consonants"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v s z h m n ŋ r l w j i e ɛ o u ə a ",
			ruleType: "Alternating",
			poi: "s z ʃ ʒ ",
			UR: ['zɛs', 'səs', 'pufhəs', 'sashoz', 'zəz', 'sores', 'hiftəz', 'zimkɛs', 'diz', 'fis', 'musik', 'zeŋzɛ', 'zɛddəf', 'lɛrsul', 'zussə', 'sissə', 'suzɡi', 'ŋəzun', 'zeɡlej', 'tolsod͡ʒ', 'zahsa', 'vafso', 'suri', 'soŋa', 'zəzdɛ', 'zaskər', 'luhso', 'ɡod͡ʒzə', 'sadzə', 'səwər', 'zozwa', 'zo', 'ɡizmol', 'ŋisɛ', 'disə', 'jizŋe', 'ɡənpo', 'ɡivd͡ʒup', 'pəlhaf', 'ŋeppuk'] ,
			SR: ['ʒɛʃ', 'ʃəʃ', 'pufhəʃ', 'ʃaʃhoʒ', 'ʒəʒ', 'ʃoreʃ', 'hiftəʒ', 'ʒimkɛʃ', 'diʒ', 'fiʃ', 'muʃik', 'ʒeŋʒɛ', 'ʒɛddəf', 'lɛrʃul', 'ʒuʃʃə', 'ʃiʃʃə', 'ʃuʒɡi', 'ŋəʒun', 'ʒeɡlej', 'tolʃod͡ʒ', 'ʒahʃa', 'vafʃo', 'ʃuri', 'ʃoŋa', 'ʒəʒdɛ', 'ʒaʃkər', 'luhʃo', 'ɡod͡ʒʒə', 'ʃadʒə', 'ʃəwər', 'ʒoʒwa', 'ʒo', 'ɡiʒmol', 'ŋiʃɛ', 'diʃə', 'jiʒŋe', 'ɡənpo', 'ɡivd͡ʒup', 'pəlhaf', 'ŋeppuk'] ,
			gloss:  ['purple', 'five', 'soybean', 'smoke', 'child', 'elbow', 'chin', 'feather', 'wish', 'milk', 'expect', 'leopard', 'parent', 'we (dual)', 'prevent', 'white', 'mouth', 'zucchini', 'eye', 'one', 'corn', 'love', 'turtle', 'old', 'mountain', 'pinch', 'path', 'return', 'beach', 'die', 'worm', 'broken', 'green', 'nose', 'lunch', 'spinach', 'root', 'use', 'sibling', 'full'] ,
			ruleTxt: " ashibilation of alveolar fricatives in codas"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g f θ s x n l j i ɪ e ɛ ɔ o ʊ u ə a ",
			ruleType: "Alternating",
			poi: "i ɪ u ʊ i̥ ɪ̥ u̥ ʊ̥ ",
			UR: ['xulpu', 'θɪlɡi', 'ku', 'solθʊ', 'su', 'lɔkxʊ', 'kistʊ', 'niku', 'tɔlʊ', 'toɡi', 'sinxɪ', 'lilkʊ', 'piɡlɪ', 'θuɡju', 'tɪ', 'nixfi', 'kʊ', 'xɔɡlɪ', 'juljʊ', 'xinu', 'sʊj', 'tut', 'nɪɡnuɡ', 'θufpaf', 'jɪnix', 'piɡɡos', 'ɡuθif', 'sɛnɡɪj', 'tulken', 'keltɪɡ', 'piɡjɔ', 'ɡɛsin', 'pɪluɡ', 'luθ', 'kuna', 'nikpo', 'ɡəxo', 'θaɡɡa', 'sanɡə', 'let'] ,
			SR: ['xulpu̥', 'θɪlɡi̥', 'ku̥', 'solθʊ̥', 'su̥', 'lɔkxʊ̥', 'kistʊ̥', 'niku̥', 'tɔlʊ̥', 'toɡi̥', 'sinxɪ̥', 'lilkʊ̥', 'piɡlɪ̥', 'θuɡju̥', 'tɪ̥', 'nixfi̥', 'kʊ̥', 'xɔɡlɪ̥', 'juljʊ̥', 'xinu̥', 'sʊj', 'tut', 'nɪɡnuɡ', 'θufpaf', 'jɪnix', 'piɡɡos', 'ɡuθif', 'sɛnɡɪj', 'tulken', 'keltɪɡ', 'piɡjɔ', 'ɡɛsin', 'pɪluɡ', 'luθ', 'kuna', 'nikpo', 'ɡəxo', 'θaɡɡa', 'sanɡə', 'let'] ,
			gloss:  ['salmon', 'rough', 'tiger', 'liver', 'climb', 'one', 'find', 'improve', 'continue', 'cream', 'lizard', 'buy', 'they', 'all', 'he/she', 'regret', 'dark', 'come', 'sun', 'know', 'ash', 'knuckle', 'empty', 'niece', 'egg', 'eyelid', 'four', 'midday ', 'garlic', 'destroy', 'write', 'white', 'new', 'puppy', 'throw', 'agree', 'abdomen', 'serving', 'give', 'pumpkin'] ,
			ruleTxt: " word-final high vowel devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ h x ɣ m n ŋ r l w j i ɛ ɔ a ",
			ruleType: "Neutralizing",
			poi: "p b t d k g ʔ ",
			UR: ['ʔɛŋta', 'rɔnka', 'kiŋka', 'θaŋtaw', 'rɔmkɛ', 'paŋtɔɣ', 'ɡɛnpɛt', 'pɛnpɛ', 'kimpa', 'tɔnkɛʔ', 'ɡampɛv', 'mankɛd', 'tankɛʔ', 'ʔiŋtɔ', 'ʒɛŋkap', 'kɔmkip', 'ʔɛmʔɔ', 'θinʔɛl', 'vinʔɔð', 'rɔnʔɛ', 'tivdɛ', 'kɛɡnaθ', 'rɛznik', 'kaʒjɛ', 'ʒɔkpa', 'fɛɣrit', 'ʔɔvi', 'kiŋxɔ', 'kɔθsɛɣ', 'kɔkfɔ', 'wabjɛʔ', 'tɔŋmiʔ', 'ɡistaɣ', 'tiʔhɛŋ', 'tibʒɔ', 'pɛɡdiθ', 'ðɔlnɛ', 'ʒiŋa', 'ŋɛmŋɔl', 'sɛmnɔ'] ,
			SR: ['ʔɛŋda', 'rɔnɡa', 'kiŋɡa', 'θaŋdaw', 'rɔmɡɛ', 'paŋdɔɣ', 'ɡɛnbɛt', 'pɛnbɛ', 'kimba', 'tɔnɡɛʔ', 'ɡambɛv', 'manɡɛd', 'tanɡɛʔ', 'ʔiŋdɔ', 'ʒɛŋɡap', 'kɔmɡip', 'ʔɛmʔɔ', 'θinʔɛl', 'vinʔɔð', 'rɔnʔɛ', 'tivdɛ', 'kɛɡnaθ', 'rɛznik', 'kaʒjɛ', 'ʒɔkpa', 'fɛɣrit', 'ʔɔvi', 'kiŋxɔ', 'kɔθsɛɣ', 'kɔkfɔ', 'wabjɛʔ', 'tɔŋmiʔ', 'ɡistaɣ', 'tiʔhɛŋ', 'tibʒɔ', 'pɛɡdiθ', 'ðɔlnɛ', 'ʒiŋa', 'ŋɛmŋɔl', 'sɛmnɔ'] ,
			gloss:  ['pepper', 'falafel', 'berry', 'hill', 'understand', 'person', 'kneel', 'earlobe', 'hope', 'parent', 'west', 'watch', 'direction', 'night', 'take', 'eyelid', 'sister', 'dinner', 'trout', 'stretch', 'grow', 'much', 'hot', 'forefinger', 'pear', 'dislike', 'hug', 'buy', 'rabbit', 'succeed', 'melon', 'swallow', 'pond', 'slice', 'tiger', 'purple', 'there', 'flea', 'leave', 'remember'] ,
			ruleTxt: " postnasal voicing of stops"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ h x ɣ m n ŋ w i ɛ ɔ a ",
			ruleType: "Alternating",
			poi: "ç ʝ x ɣ ",
			UR: ['pɛɣɡix', 'fɔtxiɣ', 'ʒixiʒ', 'pidŋix', 'ɣiɣɔp', 'ʒɔktiɣ', 'niɣɛ', 'nixɔk', 'ɣiɣwa', 'vixfɔŋ', 'xiɣdɔf', 'xiɣ', 'piɣva', 'xixxɛð', 'xixɔ', 'ziɣ', 'hiɣɛ', 'dixtɔx', 'ɣiɣ', 'hɔɣix', 'kɛɣʒɔ', 'nɛxɛn', 'xabnaf', 'xɛnɣa', 'tinxɔ', 'xɛtxiz', 'dɛɣwɛ', 'xaviʒ', 'ŋaɣʒɔx', 'ximʃiŋ', 'θaxiʒ', 'wɛɣɣa', 'ɣɔbnax', 'xɛpɛ', 'ʃɛfhɛɣ', 'hɔŋxɛw', 'bɔŋwɔð', 'finŋa', 'zamnɔ', 'ʔɔvðap'] ,
			SR: ['pɛɣɡiç', 'fɔtxiʝ', 'ʒiçiʒ', 'pidŋiç', 'ɣiʝɔp', 'ʒɔktiʝ', 'niʝɛ', 'niçɔk', 'ɣiʝwa', 'viçfɔŋ', 'xiʝdɔf', 'xiʝ', 'piʝva', 'xiçxɛð', 'xiçɔ', 'ziʝ', 'hiʝɛ', 'diçtɔx', 'ɣiʝ', 'hɔɣiç', 'kɛɣʒɔ', 'nɛxɛn', 'xabnaf', 'xɛnɣa', 'tinxɔ', 'xɛtxiz', 'dɛɣwɛ', 'xaviʒ', 'ŋaɣʒɔx', 'ximʃiŋ', 'θaxiʒ', 'wɛɣɣa', 'ɣɔbnax', 'xɛpɛ', 'ʃɛfhɛɣ', 'hɔŋxɛw', 'bɔŋwɔð', 'finŋa', 'zamnɔ', 'ʔɔvðap'] ,
			gloss:  ['buy', 'eye', 'lung', 'skin', 'wheat', 'potato', 'sibling', 'camel', 'nostril', 'coyote', 'digest', 'ankle', 'murky', 'parrot', 'waist', 'none', 'stir', 'morning', 'brown', 'slither', 'family', 'soybean', 'wife', 'sneeze', 'water', 'stream', 'some', 'finger', 'star', 'father', 'I', 'horn', 'say', 'child', 'you (pl)', 'fire', 'obtain', 'teach', 'avoid', 'four'] ,
			ruleTxt: " palatalization of velar fricatives after high front vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ x ɣ m n ŋ r l w j i ɔ u ə a ",
			ruleType: "Mixed",
			poi: "p b f v m m̥ t d θ ð s z ʃ ʒ n n̥ t͡ʃ d͡ʒ k g x ɣ ŋ ŋ̥ r l r̥ l̥ j w j̥ ʍ ",
			UR: ['zaθfən', 'bəv', 'lund͡ʒɔm', 'mit͡ʃpɔb', 'nakxɔd͡ʒ', 'rəj', 'ʒiɣbəv', 'θɔd͡ʒul', 'ʃəɣd͡ʒim', 'nɔɣŋɔɡ', 't͡ʃuvnul', 'sabɡur', 'vudɣɔb', 'ðiw', 'ɣət͡ʃpər', 'jɔz', 'vaŋ', 'ɡɔɡwið', 'd͡ʒið', 'wəjaw', 'θiʒu', 'wərli', 'd͡ʒuzd͡ʒɔ', 'zuððix', 'likkə', 'ʒəkxəp', 'rəpɔ', 'ɣɔt͡ʃt͡ʃɔ', 'mazdɔ', 'ʒibdə', 'surə', 'ʒɔffa', 'lixt͡ʃɔ', 'mɔlt͡ʃə', 'nut͡ʃtɔ', 'jid͡ʒɔ', 'fax', 'fa', 'ʃɔkka', 'θɔt͡ʃ'] ,
			SR: ['zaθfən̥', 'bəf', 'lund͡ʒɔm̥', 'mit͡ʃpɔp', 'nakxɔt͡ʃ', 'rəj̥', 'ʒiɣbəf', 'θɔd͡ʒul̥', 'ʃəɣd͡ʒim̥', 'nɔɣŋɔk', 't͡ʃuvnul̥', 'sabɡur̥', 'vudɣɔp', 'ðiʍ', 'ɣət͡ʃpər̥', 'jɔs', 'vaŋ̥', 'ɡɔɡwiθ', 'd͡ʒiθ', 'wəjaʍ', 'θiʒu', 'wərli', 'd͡ʒuzd͡ʒɔ', 'zuððix', 'likkə', 'ʒəkxəp', 'rəpɔ', 'ɣɔt͡ʃt͡ʃɔ', 'mazdɔ', 'ʒibdə', 'surə', 'ʒɔffa', 'lixt͡ʃɔ', 'mɔlt͡ʃə', 'nut͡ʃtɔ', 'jid͡ʒɔ', 'fax', 'fa', 'ʃɔkka', 'θɔt͡ʃ'] ,
			gloss:  ['ocean', 'coastline', 'blue/green', 'possum', 'sauce', 'salmon', 'hide', 'damp', 'slither', 'sibling', 'wife', 'celery', 'pea', 'lie down', 'remember', 'cow', 'push', 'sneeze', 'tribe', 'rice', 'adapt', 'aunt', 'cucumber', 'food', 'pink', 'wine', 'evil', 'new', 'slice', 'mother', 'succeed', 'direction', 'mango', 'most', 'child', 'person', 'rain', 'fire', 'open', 'claw'] ,
			ruleTxt: " word-final stop devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ θ ð s z ʃ ʒ m n ŋ w i ɛ u a ",
			ruleType: "Neutralizing",
			poi: "s z ʃ ʒ ",
			UR: ['t͡ʃupas', 't͡ʃɛðɡas', 'saɡziz', 'saʒɛz', 'tiŋsis', 'siziz', 'sazɛs', 'ʃidzuz', 'mas', 'ʃizðis', 'ʒusaz', 'ʃittɛz', 'zaz', 'zɛmd͡ʒɛz', 'pas', 'dut͡ʃɛz', 'nizas', 'zuŋsɛs', 'sanθiz', 'samkiz', 'suta', 'd͡ʒɛsθa', 'zɛsa', 'siʔsɛ', 'sizi', 'zid͡ʒa', 'saznu', 'suzap', 'ʔɛt͡ʃsa', 'zubzan', 'siwa', 'zumsud', 'ðit͡ʃsu', 'suŋsu', 'siza', 'zast͡ʃud', 'kiða', 'd͡ʒuʔa', 'bipap', 'd͡ʒaŋdɛt'] ,
			SR: ['t͡ʃupaʃ', 't͡ʃɛðɡaʃ', 'saɡziʒ', 'saʒɛʒ', 'tiŋsiʃ', 'siziʒ', 'sazɛʃ', 'ʃidzuʒ', 'maʃ', 'ʃizðiʃ', 'ʒusaʒ', 'ʃittɛʒ', 'zaʒ', 'zɛmd͡ʒɛʒ', 'paʃ', 'dut͡ʃɛʒ', 'nizaʃ', 'zuŋsɛʃ', 'sanθiʒ', 'samkiʒ', 'suta', 'd͡ʒɛsθa', 'zɛsa', 'siʔsɛ', 'sizi', 'zid͡ʒa', 'saznu', 'suzap', 'ʔɛt͡ʃsa', 'zubzan', 'siwa', 'zumsud', 'ðit͡ʃsu', 'suŋsu', 'siza', 'zast͡ʃud', 'kiða', 'd͡ʒuʔa', 'bipap', 'd͡ʒaŋdɛt'] ,
			gloss:  ['daughter', 'green', 'eye', 'falafel', 'adore', 'nowhere', 'horn', 'sibling', 'scream', 'hesitate', 'leave', 'find', 'who', 'remember', 'cucumber', 'spinach', 'yellow', 'bounce', 'understand', 'feather', 'liquid', 'wet', 'make', 'pinch', 'meal', 'hope', 'fish', 'hundred', 'aunt', 'they', 'raccoon ', 'insect', 'alligator', 'hedgehog', 'name', 'it', 'refuse', 'pink', 'leopard', 'we'] ,
			ruleTxt: " word-final ashibilation of alveolar fricatives"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ m n ŋ w j i u a ",
			ruleType: "Neutralizing",
			poi: "s z ʃ ʒ ",
			UR: ['fiðʒas', 'bas', 'duz', 'passis', 'zaʒwuz', 'suwaz', 'kis', 'ʒassus', 'ʃimsuz', 'd͡ʒis', 'faz', 'mis', 'sus', 'kafsuz', 'θammuz', 'ðus', 'mittis', 'zawiz', 'ɡasθuz', 'ʒiðɡuz', 'dazʒu', 'sub', 'fufsiθ', 'zid͡ʒza', 'ŋusa', 'mizmaŋ', 'zista', 'zud͡ʒʒa', 'zanzi', 'zuŋi', 'd͡ʒiza', 'ziʒ', 'vuzzi', 'zadʒi', 'kufsi', 'wid͡ʒzu', 'vu', 'wuθfi', 't͡ʃunʃiɡ', 't͡ʃamʃid͡ʒ'] ,
			SR: ['fiðʒaʃ', 'baʃ', 'duʒ', 'passiʃ', 'zaʒwuʒ', 'suwaʒ', 'kiʃ', 'ʒassuʃ', 'ʃimsuʒ', 'd͡ʒiʃ', 'faʒ', 'miʃ', 'suʃ', 'kafsuʒ', 'θammuʒ', 'ðuʃ', 'mittiʃ', 'zawiʒ', 'ɡasθuʒ', 'ʒiðɡuʒ', 'dazʒu', 'sub', 'fufsiθ', 'zid͡ʒza', 'ŋusa', 'mizmaŋ', 'zista', 'zud͡ʒʒa', 'zanzi', 'zuŋi', 'd͡ʒiza', 'ziʒ', 'vuzzi', 'zadʒi', 'kufsi', 'wid͡ʒzu', 'vu', 'wuθfi', 't͡ʃunʃiɡ', 't͡ʃamʃid͡ʒ'] ,
			gloss:  ['parent', 'jaw', 'damp', 'nostril', 'enjoy', 'they', 'obtain', 'we (dual)', 'decide', 'midday ', 'onion', 'group', 'grey', 'man', 'every', 'trade', 'teach', 'forehead', 'grapefruit', 'hyena', 'four', 'you (dual)', 'old', 'return', 'dark', 'believe', 'sister', 'oil', 'survive', 'snore', 'flat', 'thin', 'explain', 'lung', 'storm', 'these', 'husband', 'north', 'climb', 'use'] ,
			ruleTxt: " word-final ashibilation of alveolar fricatives"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f v θ ð s z ʃ ʒ h x ɣ m n r i ɛ u a ",
			ruleType: "Neutralizing",
			poi: "p b t d k g ",
			UR: ['ɣupsɛɡ', 'vɛbɛd', 'ɡaθɛb', 'bib', 'rɛdud', 'ɡufpid', 'θɛnʔaɡ', 'θimɛb', 'kibub', 'ʒassib', 'vanhuɡ', 'θɛdiɡ', 'dɛxθud', 'fib', 'bimhud', 'tixfiɡ', 'ʒudɛb', 'kumʔɛb', 'fid', 'ribbub', 'badi', 'ɡi', 'fɛdzɛ', 'busax', 'mudbu', 'duʔki', 'ɡɛ', 'daʔpɛ', 'ɡɛsxi', 'ɡidzu', 'tibi', 'xaɡun', 'fiɡʒu', 'ɡɛrhu', 'vunduʔ', 'bavi', 'naʒɣɛp', 'ra', 'ðaffiθ', 'hah'] ,
			SR: ['ɣupsɛk', 'vɛbɛt', 'ɡaθɛp', 'bip', 'rɛdut', 'ɡufpit', 'θɛnʔak', 'θimɛp', 'kibup', 'ʒassip', 'vanhuk', 'θɛdik', 'dɛxθut', 'fip', 'bimhut', 'tixfik', 'ʒudɛp', 'kumʔɛp', 'fit', 'ribbup', 'badi', 'ɡi', 'fɛdzɛ', 'busax', 'mudbu', 'duʔki', 'ɡɛ', 'daʔpɛ', 'ɡɛsxi', 'ɡidzu', 'tibi', 'xaɡun', 'fiɡʒu', 'ɡɛrhu', 'vunduʔ', 'bavi', 'naʒɣɛp', 'ra', 'ðaffiθ', 'hah'] ,
			gloss:  ['kitten', 'evil', 'fox', 'sugar', 'choose', 'bathe', 'father', 'clan', 'come', 'waist', 'star', 'desert', 'banana', 'grape', 'aunt', 'newt', 'wine', 'he/she/it', 'melon', 'earth', 'lose', 'stand', 'woman', 'preach', 'fresh', 'none', 'lentil', 'white', 'they (dual)', 'try', 'eyelash', 'prevent', 'desire', 'there', 'food', 'much', 'throat', 'repair', 'dolphin', 'bright'] ,
			ruleTxt: " word-final consonant devoicing"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g ʔ t͡ʃ θ s ʃ h x n ŋ l i e ɔ ə a ",
			ruleType: "Mixed",
			poi: "p ɸ t s k x ʔ ",
			UR: ['laɡnat', 'paɡɡak', 'pət', 'ʃɔp', 'tept͡ʃik', 'ɡaŋʔet', 'tənpip', 'təpek', 'ɡətti', 'ʃekxə', 'pətpi', 'xikka', 'ŋəkkɔʔ', 'xɔktiʔ', 'nəpke', 'ʔəpkə', 'xiɡniʔ', 'ʔaʔ', 'ɡeʔpa', 'ʃeʔta', 'ɡəŋta', 'piʔte', 'kɔʔe', 'pəŋle', 'kɔɡɡi', 'ʔəɡlə', 'kəke', 'təʔʔi', 'te', 'ʔa', 'kɔ', 'piɡna', 'tiŋtɔ', 'təɡɡi', 'tɔʔəɡ', 'tenxəs', 'ʃanən', 'laɡɡə', 'həɡniɡ', 'lənə'] ,
			SR: ['laɡnas', 'paɡɡax', 'pəs', 'ʃɔɸ', 'teɸt͡ʃix', 'ɡaŋʔes', 'tənpiɸ', 'təpex', 'ɡəsti', 'ʃexxə', 'pəspi', 'xixka', 'ŋəxkɔʔ', 'xɔxtiʔ', 'nəɸke', 'ʔəɸkə', 'xiɡniʔ', 'ʔaʔ', 'ɡeʔpa', 'ʃeʔta', 'ɡəŋta', 'piʔte', 'kɔʔe', 'pəŋle', 'kɔɡɡi', 'ʔəɡlə', 'kəke', 'təʔʔi', 'te', 'ʔa', 'kɔ', 'piɡna', 'tiŋtɔ', 'təɡɡi', 'tɔʔəɡ', 'tenxəs', 'ʃanən', 'laɡɡə', 'həɡniɡ', 'lənə'] ,
			gloss:  ['nephew', 'watermelon', 'bring', 'parent', 'woman', 'liver', 'midday ', 'gravy', 'coriander', 'dinner', 'nobody', 'chin', 'coastline', 'baby', 'wish', 'realize', 'some', 'love', 'damp', 'bend', 'when', 'egg', 'beer', 'pink', 'find', 'feather', 'receive', 'blueberry', 'point', 'leopard', 'we (incl)', 'swallow', 'blue/green', 'mouth', 'squirrel', 'sister', 'understand', 'spinach', 'these', 'dove'] ,
			ruleTxt: " spirantization of voiceless stops in codas"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g t͡ʃ d͡ʒ f v s z ʃ ʒ h x ɣ n ŋ r l j i ɪ e ɛ ɔ o ʊ u æ ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ u ʊ i̥ ɪ̥ u̥ ʊ̥ ",
			UR: ['ɣukʃʊ', 'jopfʊ', 'pʊkɪ', 'kipu', 'diŋtʊ', 'pu', 'lʊpʃu', 'dæpɪ', 'xifi', 'bɪlfi', 'lulxu', 'sunt͡ʃi', 'ɣixɪ', 'nixki', 'zoffɪ', 'xefsu', 'jʊtxi', 'tu', 'buxhu', 'hɔtkʊ', 'ʃɛfit͡ʃ', 't͡ʃubjɑ', 'hid͡ʒib', 't͡ʃɪtil', 't͡ʃɪnlʊl', 't͡ʃuh', 'fɪɣniɣ', 'hub', 'pivbɪ', 'ru', 'ɡʊ', 'ʒulu', 'ɣʊlŋu', 'ʒʊ', 'fɔvŋɪ', 'hɑjʊ', 'ɡɛfsɔʒ', 'lɛvzæ', 't͡ʃɛshɛ', 'ɡoŋxes'] ,
			SR: ['ɣukʃʊ̥', 'jopfʊ̥', 'pʊkɪ̥', 'kipu̥', 'diŋtʊ̥', 'pu̥', 'lʊpʃu̥', 'dæpɪ̥', 'xifi̥', 'bɪlfi̥', 'lulxu̥', 'sunt͡ʃi̥', 'ɣixɪ̥', 'nixki̥', 'zoffɪ̥', 'xefsu̥', 'jʊtxi̥', 'tu̥', 'buxhu̥', 'hɔtkʊ̥', 'ʃɛfit͡ʃ', 't͡ʃubjɑ', 'hid͡ʒib', 't͡ʃɪtil', 't͡ʃɪnlʊl', 't͡ʃuh', 'fɪɣniɣ', 'hub', 'pivbɪ', 'ru', 'ɡʊ', 'ʒulu', 'ɣʊlŋu', 'ʒʊ', 'fɔvŋɪ', 'hɑjʊ', 'ɡɛfsɔʒ', 'lɛvzæ', 't͡ʃɛshɛ', 'ɡoŋxes'] ,
			gloss:  ['evil', 'watch', 'tail', 'possess', 'kiss', 'jump', 'repair', 'choose', 'desert', 'waterfall', 'hot', 'leaf', 'they (dual)', 'how', 'awaken', 'few', 'son', 'sibling', 'strawberry', 'walnut', 'bake', 'star', 'stand', 'like', 'this', 'sand', 'direction', 'cousin', 'throw', 'fox', 'eel', 'two', 'enter', 'old', 'apple', 'trade', 'dim', 'feather', 'continue', 'dry'] ,
			ruleTxt: " word-final high vowel devoicing after voiceless consonants"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ θ ð s z ʃ ʒ h m n ŋ r l w j i ɪ e ɛ ɔ o ʊ u ə æ a ɑ ",
			ruleType: "Alternating",
			poi: "i ɪ e ɛ æ a ɑ o ɔ u ʊ ĩ ɪ̃ ẽ ɛ̃ æ̃ ã ɑ̃ õ ɔ̃ ũ ʊ̃ ə ə̃ ",
			UR: ['ŋʊtær', 'midzew', 'rɔðŋo', 'mɑmmɪ', 'notsɛ', 'ŋɑðd͡ʒɛt', 'mɔst͡ʃeb', 'piŋʊw', 'wɑlmʊ', 'sɛnɛj', 'ŋʊŋzuʃ', 'monez', 'momɡɔʒ', 'nɑʃsə', 'zibmæʔ', 'mɑlzɔj', 'lunuð', 'ŋɛɡu', 'ŋɑna', 'd͡ʒad͡ʒnu', 'zaʒmel', 'mærwi', 'rəd͡ʒmɪ', 'ʒod͡ʒma', 'rə', 'dətθɑ', 'zæwʊ', 'bizlu', 'kem', 'ɡɪðza', 'wʊksəʔ', 'ke', 'dotpɔ', 'jeð', 'jɛ', 't͡ʃɛt͡ʃpa', 'kɑ', 'rət͡ʃ', 'bira', 'ʒoʒjoʒ'] ,
			SR: ['ŋʊ̃tær', 'mĩdzew', 'rɔðŋõ', 'mɑ̃mmɪ̃', 'nõtsɛ', 'ŋɑ̃ðd͡ʒɛt', 'mɔ̃st͡ʃeb', 'piŋʊ̃w', 'wɑlmʊ̃', 'sɛnɛ̃j', 'ŋʊ̃ŋzuʃ', 'mõnẽz', 'mõmɡɔʒ', 'nɑ̃ʃsə', 'zibmæ̃ʔ', 'mɑ̃lzɔj', 'lunũð', 'ŋɛ̃ɡu', 'ŋɑ̃nã', 'd͡ʒad͡ʒnũ', 'zaʒmẽl', 'mæ̃rwi', 'rəd͡ʒmɪ̃', 'ʒod͡ʒmã', 'rə', 'dətθɑ', 'zæwʊ', 'bizlu', 'kem', 'ɡɪðza', 'wʊksəʔ', 'ke', 'dotpɔ', 'jeð', 'jɛ', 't͡ʃɛt͡ʃpa', 'kɑ', 'rət͡ʃ', 'bira', 'ʒoʒjoʒ'] ,
			gloss:  ['dislike', 'new', 'become', 'monkey', 'tree bark', 'most', 'continue', 'uncle', 'recline', 'thick', 'liquid', 'cream', 'soybean', 'agree', 'rye', 'each', 'brother', 'woman', 'tuna', 'blue/green', 'rain', 'leopard', 'butterfly', 'stream', 'they (fem)', 'cloud', 'midday ', 'awaken', 'parent', 'cut', 'spouse', 'few', 'hill', 'evil', 'egg', 'we (incl)', 'thumb', 'throat', 'blueberry', 'downhill'] ,
			ruleTxt: " progressive vowel nasalization"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ m n ŋ r l w j i u ə æ ɑ ",
			ruleType: "Alternating",
			poi: "c ɟ ɲ k g ŋ ",
			UR: ['miŋnɑ', 'ʔud͡ʒɡiɡ', 'wikkæ', 'biŋ', 'ŋiŋlɑ', 'ŋiɡ', 'bikəɡ', 'wikkɑɡ', 'riɡvuð', 'miɡŋæ', 't͡ʃuvriɡ', 'ɡiɡæt͡ʃ', 'biŋʒu', 'diɡməɡ', 'wiŋdɑŋ', 'ŋikkæ', 'wiɡæŋ', 'dikʔuk', 'ɡikuŋ', 'kiɡu', 'ɡæ', 'pækθij', 'ŋɑɡ', 'ŋæɡu', 'ɡukθə', 'ŋuksæw', 'ɡuɡzæ', 'kimfu', 'ʔæk', 'ŋid͡ʒ', 'ŋəs', 'ɡu', 'ŋəʔfi', 'θəɡvæʒ', 'wæʒɡæ', 'jɑɡɑ', 'nɑθəd', 'zibnis', 'ʃið', 'wɑð'] ,
			SR: ['miɲnɑ', 'ʔud͡ʒɡiɟ', 'wickæ', 'biɲ', 'ŋiɲlɑ', 'ŋiɟ', 'bicəɡ', 'wickɑɡ', 'riɟvuð', 'miɟŋæ', 't͡ʃuvriɟ', 'ɡiɟæt͡ʃ', 'biɲʒu', 'diɟməɡ', 'wiɲdɑŋ', 'ŋickæ', 'wiɟæŋ', 'dicʔuk', 'ɡicuŋ', 'kiɟu', 'ɡæ', 'pækθij', 'ŋɑɡ', 'ŋæɡu', 'ɡukθə', 'ŋuksæw', 'ɡuɡzæ', 'kimfu', 'ʔæk', 'ŋid͡ʒ', 'ŋəs', 'ɡu', 'ŋəʔfi', 'θəɡvæʒ', 'wæʒɡæ', 'jɑɡɑ', 'nɑθəd', 'zibnis', 'ʃið', 'wɑð'] ,
			gloss:  ['we (dual)', 'soybean', 'sea', 'shark', 'storm', 'pretend', 'ear', 'night', 'full', 'saliva', 'borrow', 'scorpion', 'many', 'path', 'murky', 'decide', 'rabbit', 'try', 'fruit', 'burn', 'yellow', 'dog', 'brown', 'sip', 'spinach', 'downhill', 'crawl', 'beverage', 'dry', 'watch', 'he/she/it', 'group', 'expect', 'honey', 'love', 'zero', 'bumpy', 'valley', 'elephant', 'tongue'] ,
			ruleTxt: " palatalization of velars after high front vowels"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g ʔ t͡ʃ f θ s h x m n ŋ w i ɪ e ɛ ɔ o ʊ u æ ɑ ",
			ruleType: "Mixed",
			poi: "i ɪ ɨ ",
			UR: ['t͡ʃinhi', 'hɪt͡ʃi', 'miht͡ʃiw', 't͡ʃixtæ', 't͡ʃiɡmik', 't͡ʃiɡnʊp', 't͡ʃimʊ', 't͡ʃit͡ʃin', 'θɪt͡ʃin', 'kɪt͡ʃt͡ʃif', 't͡ʃiŋkʊ', 't͡ʃisʊf', 'mɪt͡ʃi', 't͡ʃi', 't͡ʃinsɪθ', 't͡ʃim', 't͡ʃɪɡŋiʔ', 'tʊt͡ʃɪ', 'ŋept͡ʃɪx', 'wɪt͡ʃɪŋ', 'ʔitsʊs', 'kiʔtɪ', 'ki', 'tiɡnɛ', 'ɡɪn', 'xiŋxux', 'pɪ', 'kifsɛ', 'tɪɡŋɔ', 'ŋɪpi', 'mɪθoŋ', 'wɪktɪ', 'wiɡmɪ', 'θinŋi', 'nim', 'nɪk', 'xoɡnɔt', 'nomt͡ʃe', 'meɡmɔf', 'wʊ'] ,
			SR: ['t͡ʃɨnhi', 'hɪt͡ʃɨ', 'miht͡ʃɨw', 't͡ʃɨxtæ', 't͡ʃɨɡmik', 't͡ʃɨɡnʊp', 't͡ʃɨmʊ', 't͡ʃɨt͡ʃɨn', 'θɪt͡ʃɨn', 'kɪt͡ʃt͡ʃɨf', 't͡ʃɨŋkʊ', 't͡ʃɨsʊf', 'mɪt͡ʃɨ', 't͡ʃɨ', 't͡ʃɨnsɪθ', 't͡ʃɨm', 't͡ʃɪɡŋiʔ', 'tʊt͡ʃɪ', 'ŋept͡ʃɪx', 'wɪt͡ʃɪŋ', 'ʔitsʊs', 'kiʔtɪ', 'ki', 'tiɡnɛ', 'ɡɪn', 'xiŋxux', 'pɪ', 'kifsɛ', 'tɪɡŋɔ', 'ŋɪpi', 'mɪθoŋ', 'wɪktɪ', 'wiɡmɪ', 'θinŋi', 'nim', 'nɪk', 'xoɡnɔt', 'nomt͡ʃe', 'meɡmɔf', 'wʊ'] ,
			gloss:  ['lung', 'begin', 'niece', 'fresh', 'warm', 'one', 'agree', 'two', 'alligator', 'possess', 'write', 'blue/green', 'father', 'sand', 'twist', 'neck', 'when', 'try', 'swim', 'buy', 'valley', 'you (dual)', 'husband', 'prevent', 'forefinger', 'direction', 'murky', 'flat', 'wheat', 'duck', 'beetle', 'sibling', 'midday ', 'flame', 'empty', 'buttocks', 'horn', 'drink', 'pepper', 'return'] ,
			ruleTxt: " retraction of high front vowels after postalveolars"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ f θ s ʃ h x m n ŋ r l w j i u ə a ",
			ruleType: "Mixed",
			poi: "p b f v t d θ ð s z ʃ ʒ k g x ɣ h ɦ ʔ ",
			UR: ['ʃimfi', 'ʔəŋpaf', 'jinsə', 'ʔuŋθa', 'fiŋsat', 'səŋsi', 'ʃunkaj', 'θunhu', 'xəŋhan', 'kuŋta', 'fuŋpa', 'xaŋsiθ', 'ʔəmsəx', 'ʃamsət', 'ʔamsa', 'ʃamfaŋ', 'fənʔip', 'xiŋʔə', 'tənʔəx', 'ʔinʔud', 'ŋafti', 'ʃidŋa', 'θihiʔ', 'humiʃ', 'xikis', 'puxhu', 'xəʃə', 'həbləp', 'biʃi', 'θəhiʃ', 'ruʃ', 'xis', 'nulfi', 'xərtuh', 'xə', 'xəθkə', 'wəl', 'nimwəl', 'ɡəbnaw', 'liɡmi'] ,
			SR: ['ʃimvi', 'ʔəŋbaf', 'jinzə', 'ʔuŋða', 'fiŋzat', 'səŋzi', 'ʃunɡaj', 'θunɦu', 'xəŋɦan', 'kuŋda', 'fuŋba', 'xaŋziθ', 'ʔəmzəx', 'ʃamzət', 'ʔamza', 'ʃamvaŋ', 'fənʔip', 'xiŋʔə', 'tənʔəx', 'ʔinʔud', 'ŋafti', 'ʃidŋa', 'θihiʔ', 'humiʃ', 'xikis', 'puxhu', 'xəʃə', 'həbləp', 'biʃi', 'θəhiʃ', 'ruʃ', 'xis', 'nulfi', 'xərtuh', 'xə', 'xəθkə', 'wəl', 'nimwəl', 'ɡəbnaw', 'liɡmi'] ,
			gloss:  ['he/she/it', 'salamander', 'salt', 'those', 'arrive', 'throw', 'wolf', 'chin', 'each', 'sit', 'black', 'beetle', 'sleep', 'decide', 'island', 'liver', 'many', 'repeat', 'new', 'tree', 'fold', 'ankle', 'smoke', 'drink', 'argue', 'you (dual)', 'use', 'few', 'believe', 'egg', 'street', 'hyena', 'man', 'bumpy', 'pebble', 'who', 'baby', 'gravy', 'we (incl)', 'star'] ,
			ruleTxt: " postnasal voicing of obstruents"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p t k g ʔ f θ s ʃ m n ŋ j i ɪ e ɛ ɔ o ʊ u a ",
			ruleType: "Mixed",
			poi: "i ɪ ɨ ",
			UR: ['ʃiŋmɪʃ', 'ʃiŋ', 'ʃiɡnʊ', 'ʔiŋʃit', 'ʃiɡŋiʔ', 'ʃiɡne', 'ŋɪsʃi', 'ʃimmi', 'θɪʃi', 'ʃimfe', 'ʃimfɪθ', 'ʃiθpa', 'ʃikpi', 'ʃinfɪʃ', 'sɪʃip', 'ʃiɡjeθ', 'pɪŋʃɪk', 'ʃɪɡŋi', 'ʃɪpse', 'ʃɪsʔiʃ', 'fʊŋŋiɡ', 'tiɡnʊ', 'jɪmpɪ', 'ŋɪɡŋi', 'siɡ', 'ɡɪʔ', 'θɪste', 'θɪmmoŋ', 'θɪnpo', 'nisi', 'tɪmpi', 'tuntɪɡ', 'sɪɡɪɡ', 'ŋoɡɡim', 'tɪttek', 'siŋɡiŋ', 'ʔuʃfa', 'ʔɔskeʃ', 'ɡɛ', 'toɡ'] ,
			SR: ['ʃɨŋmɪʃ', 'ʃɨŋ', 'ʃɨɡnʊ', 'ʔiŋʃɨt', 'ʃɨɡŋiʔ', 'ʃɨɡne', 'ŋɪsʃɨ', 'ʃɨmmi', 'θɪʃɨ', 'ʃɨmfe', 'ʃɨmfɪθ', 'ʃɨθpa', 'ʃɨkpi', 'ʃɨnfɪʃ', 'sɪʃɨp', 'ʃɨɡjeθ', 'pɪŋʃɪk', 'ʃɪɡŋi', 'ʃɪpse', 'ʃɪsʔiʃ', 'fʊŋŋiɡ', 'tiɡnʊ', 'jɪmpɪ', 'ŋɪɡŋi', 'siɡ', 'ɡɪʔ', 'θɪste', 'θɪmmoŋ', 'θɪnpo', 'nisi', 'tɪmpi', 'tuntɪɡ', 'sɪɡɪɡ', 'ŋoɡɡim', 'tɪttek', 'siŋɡiŋ', 'ʔuʃfa', 'ʔɔskeʃ', 'ɡɛ', 'toɡ'] ,
			gloss:  ['group', 'dog', 'claw', 'flea', 'west', 'red', 'cold', 'calf', 'cantaloupe', 'enter', 'three', 'awaken', 'baby', 'cinnamon', 'dark', 'feed', 'cream', 'coastline', 'spouse', 'ignore', 'bean', 'root', 'mango', 'neck', 'smell', 'new', 'bring', 'horn', 'bumpy', 'father', 'snore', 'ocean', 'eyelash', 'you (sg)', 'all', 'woman', 'fist', 'flame', 'damp', 'blue/green'] ,
			ruleTxt: " retraction of high front vowels after postalveolars"
		},
		{
			templates: ['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]', '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]', '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
			phoneme: "p b t d k g ʔ t͡ʃ d͡ʒ θ s ʃ x m n ŋ r l w j i u ə a ",
			ruleType: "Mixed",
			poi: "p t k pʰ tʰ kʰ ʔ ",
			UR: ['jək', 'ʔapit', 'pəpəp', 'xibmak', 'ludŋut', 'ʔat', 'ʔud͡ʒɡəp', 'ŋinbit', 't͡ʃəd͡ʒlət', 'wamup', 'dətək', 'wurʃək', 'xip', 'raxuk', 'tudwip', 'lidit', 'ʔəxəʔ', 'pətiʔ', 'xasxaʔ', 'pəŋdiʔ', 'piŋka', 'taka', 'putaθ', 'puʔt͡ʃad͡ʒ', 'θaʔa', 'tata', 'piblə', 'kəkpa', 'ɡuʔpal', 'kidna', 'taʔt͡ʃa', 'kad͡ʒjə', 'ʔatal', 'kiʃtuθ', 'kilθu', 'ʔat͡ʃ', 'duʃsu', 'jibrə', 'dudla', 'xat͡ʃθun'] ,
			SR: ['jəkʰ', 'ʔapitʰ', 'pəpəpʰ', 'xibmakʰ', 'ludŋutʰ', 'ʔatʰ', 'ʔud͡ʒɡəpʰ', 'ŋinbitʰ', 't͡ʃəd͡ʒlətʰ', 'wamupʰ', 'dətəkʰ', 'wurʃəkʰ', 'xipʰ', 'raxukʰ', 'tudwipʰ', 'liditʰ', 'ʔəxəʔ', 'pətiʔ', 'xasxaʔ', 'pəŋdiʔ', 'piŋka', 'taka', 'putaθ', 'puʔt͡ʃad͡ʒ', 'θaʔa', 'tata', 'piblə', 'kəkpa', 'ɡuʔpal', 'kidna', 'taʔt͡ʃa', 'kad͡ʒjə', 'ʔatal', 'kiʃtuθ', 'kilθu', 'ʔat͡ʃ', 'duʃsu', 'jibrə', 'dudla', 'xat͡ʃθun'] ,
			gloss:  ['every', 'mosquito', 'rock', 'regret', 'parent', 'stand', 'there', 'ocean', 'one', 'smoke', 'dove', 'shark', 'son', 'person', 'wife', 'elephant', 'direction', 'feed', 'tell', 'it', 'hundred', 'sibling', 'get', 'walk', 'eyelid', 'island', 'abdomen', 'horn', 'realize', 'throw', 'murky', 'we (dual)', 'dry', 'wrist', 'play', 'many', 'water', 'cousin', 'oats', 'hair'] ,
			ruleTxt: " word-final aspiration of voiceless stops"
		}
	]
;

module.exports = {ruleList};