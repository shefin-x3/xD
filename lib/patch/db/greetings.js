function _0x33de(_0x22b769, _0x37d429) {
    const _0x41d8a4 = _0x41d8();
    return _0x33de = function (_0x33ded3, _0x3fe87a) {
        _0x33ded3 = _0x33ded3 - 0x128;
        let _0x21f518 = _0x41d8a4[_0x33ded3];
        return _0x21f518;
    }, _0x33de(_0x22b769, _0x37d429);
}
const _0x4ce42a = _0x33de;

function _0x41d8() {
    const _0x23e608 = ['Gre', 'STR', '../', 'len', 'ete', '20cMEYua', 'sag', 'upd', 'ine', 'seq', 'fin', 'get', '305755gLHWIU', 'uel', 'del', 'dat', 'dAl', 'tro', '7180292wUGlbu', 'ABA', 'cre', 'ING', 'Mes', '625985cKSOAF', 'com', 'TEX', '583891eXDMIb', '235266CazVLt', 'eti', 'def', 'wel', '2aAlMeV', 'ate', 'gth', '6JNBdil', 'LEA', 'lue', '99aitBCx', '1073510wOEjWJ', 'aVa', 'ize', 'con', 'fig', 'BOO', '9830608iewHza'];
    _0x41d8 = function () {
        return _0x23e608;
    };
    return _0x41d8();
}(function (_0x2993dc, _0x643bf9) {
    const _0x54a87d = _0x33de,
        _0x51d22e = _0x2993dc();
    while (!![]) {
        try {
            const _0xb1a82e = -parseInt(_0x54a87d(0x150)) / 0x1 * (-parseInt(_0x54a87d(0x136)) / 0x2) + -parseInt(_0x54a87d(0x132)) / 0x3 + -parseInt(_0x54a87d(0x149)) / 0x4 * (parseInt(_0x54a87d(0x12e)) / 0x5) + parseInt(_0x54a87d(0x139)) / 0x6 * (parseInt(_0x54a87d(0x129)) / 0x7) + -parseInt(_0x54a87d(0x143)) / 0x8 + -parseInt(_0x54a87d(0x13c)) / 0x9 * (-parseInt(_0x54a87d(0x13d)) / 0xa) + parseInt(_0x54a87d(0x131)) / 0xb;
            if (_0xb1a82e === _0x643bf9) break;
            else _0x51d22e['push'](_0x51d22e['shift']());
        } catch (_0x2f5d34) {
            _0x51d22e['push'](_0x51d22e['shift']());
        }
    }
}(_0x41d8, 0x9a59c));
const config = require("../../../config"),
    {
        DataTypes
    } = require(_0x4ce42a(0x14d) + _0x4ce42a(0x151) + _0x4ce42a(0x13f)),
    GreetingsDB = config['DAT' + _0x4ce42a(0x12a) + 'SE'][_0x4ce42a(0x134) + _0x4ce42a(0x14c)](_0x4ce42a(0x144) + _0x4ce42a(0x133) + 'ng', {
        'chat': {
            'type': DataTypes[_0x4ce42a(0x145) + _0x4ce42a(0x12c)],
            'allowNull': ![]
        },
        'type': {
            'type': DataTypes['STR' + _0x4ce42a(0x12c)],
            'defaultValue': _0x4ce42a(0x135) + _0x4ce42a(0x12f) + 'e'
        },
        'message': {
            'type': DataTypes[_0x4ce42a(0x130) + 'T'],
            'allowNull': ![]
        },
        'enabled': {
            'type': DataTypes[_0x4ce42a(0x142) + _0x4ce42a(0x13a) + 'N'],
            'defaultValue': !![]
        }
    });
exports[_0x4ce42a(0x14f) + _0x4ce42a(0x12d) + _0x4ce42a(0x14a) + 'e'] = async function (_0xc5e7df, _0x5d1942) {
    const _0x398fa3 = _0x4ce42a,
        _0x2ab642 = await GreetingsDB[_0x398fa3(0x14e) + 'dAl' + 'l']({
            'where': {
                'chat': _0xc5e7df,
                'type': _0x5d1942
            }
        });
    if (_0x2ab642[_0x398fa3(0x147) + _0x398fa3(0x138)] < 0x1) return ![];
    return _0x2ab642[0x0][_0x398fa3(0x153) + _0x398fa3(0x13e) + _0x398fa3(0x13b) + 's'];
}, exports['set' + 'Mes' + _0x4ce42a(0x14a) + 'e'] = async function (_0x124cbd, _0x348220, _0xd64ce9, _0x3162b1 = !![]) {
    const _0x4c597a = _0x4ce42a;
    try {
        const _0x4496f5 = await GreetingsDB['fin' + _0x4c597a(0x154) + 'l']({
            'where': {
                'chat': _0x124cbd,
                'type': _0x348220
            }
        });
        return _0x4496f5[_0x4c597a(0x147) + _0x4c597a(0x138)] < 0x1 ? await GreetingsDB[_0x4c597a(0x12b) + _0x4c597a(0x137)]({
            'chat': _0x124cbd,
            'type': _0x348220,
            'message': _0xd64ce9,
            'enabled': _0x3162b1
        }) : await _0x4496f5[0x0][_0x4c597a(0x14b) + 'ate']({
            'chat': _0x124cbd,
            'type': _0x348220,
            'message': _0xd64ce9,
            'enabled': _0x3162b1
        });
    } catch (_0x563a41) {}
}, exports[_0x4ce42a(0x152) + _0x4ce42a(0x148) + _0x4ce42a(0x12d) + _0x4ce42a(0x14a) + 'e'] = async function (_0x25470d, _0x25acc9) {
    const _0x2661c5 = _0x4ce42a,
        _0x19aa22 = await GreetingsDB['fin' + _0x2661c5(0x154) + 'l']({
            'where': {
                'chat': _0x25470d,
                'type': _0x25acc9
            }
        });
    return await _0x19aa22[0x0]['des' + _0x2661c5(0x128) + 'y']();
};
