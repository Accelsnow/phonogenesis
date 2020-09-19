from app import db
from app.models import User, Message, Group, UserGroup, Quiz, UserQuiz, QuizQuestion, Attempt, Question

if __name__ == '__main__':
    usr_stu = User(id=1, username='stu', type='student', email='stu@mail.com', name='stuname')
    usr_stu.set_password('stu')
    usr_prf = User(id=2, username='prof', type='professor', email='prof@mail.com', name='profname')
    usr_prf.set_password('prof')
    grp = Group(id=1, name='pg1', owner_id=2)
    usr_grp = UserGroup(group_id=1, user_id=1)
    msg = Message(content='This is a default message', from_user_id=2, to_user_id=1)
    qiz = Quiz(id=1, name='Test Quiz', owner_id=2)
    usr_qiz = UserQuiz(quiz_id=1, user_id=1)
    qiz_que = QuizQuestion(quiz_id=1, question_id=1)
    att = Attempt(id=1, score=20, answers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                  user_id=1, quiz_id=1)
    que = Question(
        id=1,
        size=20,
        canUR=True,
        canPhoneme=True,
        maxCADT=10,
        templates=['[consonant]-[vowel]', '[consonant]-[vowel]-[consonant]', '[consonant]-[vowel]-[consonant]-[vowel]',
                   '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]',
                   '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]',
                   '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]',
                   '[consonant]-[vowel]-[consonant]-[vowel]-[consonant]',
                   '[consonant]-[vowel]-[obstruent,voiceless]-[obstruent,voiceless]-[vowel]-[consonant]',
                   '[consonant]-[vowel]-[obstruent,voiced]-[consonant,voiced]-[vowel]-[consonant]',
                   '[consonant]-[vowel]-[sonorant,contoid]-[consonant]-[vowel]-[consonant]'],
        poi="['c', 'ɟ', 'ç', 'ʝ', 'ɲ', 'k', 'g', 'x', 'ɣ', 'ŋ']",
        ruleType="Alternating",
        phoneme="p b t d k g ʔ t͡ʃ d͡ʒ f v θ ð s z ʃ ʒ x ɣ m n ŋ l w j i e ɔ o æ ɑ",
        ruleTxt="palatalization of velars after high front vowels",
        gloss=['\'bounce\'', '\'wheat\'', '\'mosquito\'', '\'awaken\'', '\'two\'', '\'coastline\'', '\'rain\'',
               '\'lose\'', '\'we (incl)\'', '\'bring\'', '\'you (dual)\'', '\'what\'', '\'ketchup\'', '\'sun\'',
               '\'build\'', '\'lake\'', '\'west\'', '\'fight\'', '\'destroy\'', '\'thumb\'', '\'kneel\'', '\'few\'',
               '\'then\'', '\'black\'', '\'pretend\'', '\'food\'', '\'apple\'', '\'onion\'', '\'horn\'', '\'soybean\''],
        SR=['diɲxɑ', 'ʃiɟe', 'ɣiçseɣ', 'ŋoʒziç', 'kicɑθ', 'ŋictog', 'xiɲʔo', 'lɔmiɟ', 'kiɲd͡ʒɑt͡ʃ', 'ʔicʃɑ', 'giʝneɣ',
            'kɔfxiʝ', 'ʃiçɔ', 'liɲvoŋ', 'θiɲ', 'koxoʒ', 'ʒiʒŋi', 'zid͡ʒŋe', 'ɣɔɣjɔz', 'gæŋjɔ', 'ɣot͡ʃxæ', 'xoɣɣɔ',
            'ɣækʔil', 'ʒogʒi', 'ðex', 'ŋɔp', 'ŋe', 'jældeʒ', 'ʔɑnmæ', 'pesin'],
        UR=['diŋxɑ', 'ʃige', 'ɣixseɣ', 'ŋoʒzix', 'kikɑθ', 'ŋiktog', 'xiŋʔo', 'lɔmig', 'kiŋd͡ʒɑt͡ʃ', 'ʔikʃɑ', 'giɣneɣ',
            'kɔfxiɣ', 'ʃixɔ', 'liŋvoŋ', 'θiŋ', 'koxoʒ', 'ʒiʒŋi', 'zid͡ʒŋe', 'ɣɔɣjɔz', 'gæŋjɔ', 'ɣot͡ʃxæ', 'xoɣɣɔ',
            'ɣækʔil', 'ʒogʒi', 'ðex', 'ŋɔp', 'ŋe', 'jældeʒ', 'ʔɑnmæ', 'pesin'])

    db.session.add(usr_stu)
    db.session.add(usr_prf)
    db.session.add(grp)
    db.session.add(usr_grp)
    db.session.add(msg)
    db.session.add(qiz)
    db.session.add(que)
    db.session.add(qiz_que)
    db.session.add(usr_qiz)
    db.session.add(att)
    db.session.commit()
