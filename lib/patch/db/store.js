function _0x2aea() {
    const _0x1189a6 = ['DAT', 'fig', 'TEX', '6553620MLQinZ', '24nKHLuo', '1390648OMyRBk', '27057480JuGqAP', 'ING', 'ABA', '930194lgMbXd', 'cha', '59976djBOCY', '../', '736WLAqBq', 'tac', 'ize', '240hqxLps', 'DQW', '11TWNykd', '6061676WgPyys', 'fin', 'upd', 'con', 'par', 'STR', 'ate', '8562wxjDQx', 'ine', 'gth'];
    _0x2aea = function () {
        return _0x1189a6;
    };
    return _0x2aea();
}
const _0x17d545 = _0x564c;
(function (_0x401b72, _0x18e912) {
    const _0x3bf4fe = _0x564c,
        _0x4a9b39 = _0x401b72();
    while (!![]) {
        try {
            const _0x4f2033 = -parseInt(_0x3bf4fe(0xb9)) / 0x1 + -parseInt(_0x3bf4fe(0xc0)) / 0x2 * (-parseInt(_0x3bf4fe(0xca)) / 0x3) + parseInt(_0x3bf4fe(0xc3)) / 0x4 + -parseInt(_0x3bf4fe(0xb3)) / 0x5 + parseInt(_0x3bf4fe(0xb4)) / 0x6 * (-parseInt(_0x3bf4fe(0xb5)) / 0x7) + parseInt(_0x3bf4fe(0xbd)) / 0x8 * (-parseInt(_0x3bf4fe(0xbb)) / 0x9) + parseInt(_0x3bf4fe(0xb6)) / 0xa * (parseInt(_0x3bf4fe(0xc2)) / 0xb);
            if (_0x4f2033 === _0x18e912) break;
            else _0x4a9b39['push'](_0x4a9b39['shift']());
        } catch (_0x230b0f) {
            _0x4a9b39['push'](_0x4a9b39['shift']());
        }
    }
}(_0x2aea, 0xdf629));

function _0x564c(_0x130444, _0xfbe4ca) {
    const _0x2aea20 = _0x2aea();
    return _0x564c = function (_0x564cd0, _0x388008) {
        _0x564cd0 = _0x564cd0 - 0xb1;
        let _0x42104a = _0x2aea20[_0x564cd0];
        return _0x42104a;
    }, _0x564c(_0x130444, _0xfbe4ca);
}
const {
    DataTypes
} = require('seq' + 'uel' + _0x17d545(0xbf)), config = require("../../../config"), ChatsDB = config[_0x17d545(0xcd) + 'ABA' + 'SE']['def' + _0x17d545(0xcb)](_0x17d545(0xba) + 't', {
    'chats': {
        'type': DataTypes[_0x17d545(0xc8) + _0x17d545(0xb7)]
    },
    'v': {
        'type': DataTypes['ARR' + 'AY'](DataTypes['JSO' + 'N'])
    }
}), ContactsDB = config[_0x17d545(0xcd) + _0x17d545(0xb8) + 'SE']['def' + 'ine']('con' + _0x17d545(0xbe) + 't', {
    'contacts': {
        'type': DataTypes[_0x17d545(0xb2) + 'T']
    }
}), getChats = async () => {
    const _0x2e65e8 = _0x17d545,
        _0xa8781e = await ChatsDB[_0x2e65e8(0xc4) + 'dAl' + 'l']({
            'where': {}
        });
    console['log'](JSON[_0x2e65e8(0xc7) + 'se'](_0xa8781e[0x0]['v'])['tes' + 't']);
    if (!_0xa8781e['len' + _0x2e65e8(0xcc)]) return [];
}, setChats = async () => {
    const _0x5b9253 = _0x17d545,
        _0x15b70e = {
            'DQWAR': _0x5b9253(0xba) + 'ts'
        },
        _0x33b98c = await ChatsDB[_0x5b9253(0xc4) + 'dAl' + 'l']({
            'where': {}
        });
    await _0x33b98c[0x0][_0x5b9253(0xc5) + _0x5b9253(0xc9)]({
        'chats': _0x15b70e[_0x5b9253(0xc1) + 'AR'],
        'v': [{
            'test': 0x2710
        }]
    });
};
