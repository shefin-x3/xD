function _0x208f() {
    const _0x185aff = ['lue', 'jsh', '56YacbOG', '354582uwnniP', '/ba', 'tro', 'ize', '../', 'zWA', 'ABA', 'TEX', 'def', 'len', '4078188tjABQR', 'uel', 'ify', 'dat', 'set', 'ing', '75988LldbSz', 'del', 'fig', 'rep', 'gth', 'par', 'ile', 'des', 'shF', 'upd', 'val', 'ate', 'ete', 'ine', 'seq', '1380197tlemFA', '7570068HsexbA', '2973202rcKzvz', 'ive', 'key', 'str', 'Cre', 'iwa', '55PZlNqj', 'tor', 'get', 'con', '@ad', 'Key', '130oWIgkU', 'STR', 'DAT', 'cre', 'ING', 'dAl', 'aVa', 'rev', '761094oVhhSh', 'fin'];
    _0x208f = function () {
        return _0x185aff;
    };
    return _0x208f();
}
const _0x9cc653 = _0x556c;
(function (_0x442c93, _0xf28db2) {
    const _0x2ca838 = _0x556c,
        _0x51c01e = _0x442c93();
    while (!![]) {
        try {
            const _0x3abf46 = parseInt(_0x2ca838(0x211)) / 0x1 + -parseInt(_0x2ca838(0x1fd)) / 0x2 + -parseInt(_0x2ca838(0x1e6)) / 0x3 + parseInt(_0x2ca838(0x1ec)) / 0x4 * (-parseInt(_0x2ca838(0x203)) / 0x5) + parseInt(_0x2ca838(0x1fc)) / 0x6 + -parseInt(_0x2ca838(0x1fb)) / 0x7 * (-parseInt(_0x2ca838(0x215)) / 0x8) + -parseInt(_0x2ca838(0x216)) / 0x9 * (-parseInt(_0x2ca838(0x209)) / 0xa);
            if (_0x3abf46 === _0xf28db2) break;
            else _0x51c01e['push'](_0x51c01e['shift']());
        } catch (_0x2ecfbe) {
            _0x51c01e['push'](_0x51c01e['shift']());
        }
    }
}(_0x208f, 0xd2013));

function _0x556c(_0x12ee05, _0x4b5b97) {
    const _0x208f21 = _0x208f();
    return _0x556c = function (_0x556c71, _0x231c43) {
        _0x556c71 = _0x556c71 - 0x1e6;
        let _0x54c765 = _0x208f21[_0x556c71];
        return _0x54c765;
    }, _0x556c(_0x12ee05, _0x4b5b97);
}
const {
    DataTypes
} = require(_0x9cc653(0x1fa) + _0x9cc653(0x1e7) + _0x9cc653(0x219)), config = require('../' + _0x9cc653(0x21a) + _0x9cc653(0x206) + _0x9cc653(0x1ee)), {
    BufferJSON
} = require(_0x9cc653(0x207) + _0x9cc653(0x202) + _0x9cc653(0x214) + 'ing' + _0x9cc653(0x217) + _0x9cc653(0x1f2) + 'ys'), KeysDB = config[_0x9cc653(0x20b) + _0x9cc653(0x21c) + 'SE'][_0x9cc653(0x21e) + _0x9cc653(0x1f9)](_0x9cc653(0x1ff), {
    'type': {
        'type': DataTypes[_0x9cc653(0x20a) + 'ING']
    },
    'key': {
        'type': DataTypes[_0x9cc653(0x20a) + _0x9cc653(0x20d)]
    },
    'value': {
        'type': DataTypes[_0x9cc653(0x21d) + 'T']
    }
}), CredsDB = config[_0x9cc653(0x20b) + _0x9cc653(0x21c) + 'SE'][_0x9cc653(0x21e) + _0x9cc653(0x1f9)]('cre' + 'd', {
    'type': {
        'type': DataTypes[_0x9cc653(0x20a) + 'ING']
    },
    'value': {
        'type': DataTypes[_0x9cc653(0x21d) + 'T']
    }
});
exports[_0x9cc653(0x1ea) + 'Cre' + 'ds'] = async _0x378314 => {
    const _0x4a39e0 = _0x9cc653,
        _0x6d212b = {
            'zWAVj': _0x4a39e0(0x20c) + 'ds'
        },
        _0x4c000b = await CredsDB[_0x4a39e0(0x212) + _0x4a39e0(0x20e) + 'l']({
            'where': {
                'type': _0x6d212b[_0x4a39e0(0x21b) + 'Vj']
            }
        });
    !_0x4c000b[_0x4a39e0(0x21f) + 'gth'] ? await CredsDB['cre' + _0x4a39e0(0x1f7)]({
        'type': _0x6d212b[_0x4a39e0(0x21b) + 'Vj'],
        'value': JSON[_0x4a39e0(0x200) + _0x4a39e0(0x1eb) + _0x4a39e0(0x1e8)](_0x378314, BufferJSON['rep' + 'lac' + 'er'], 0x2)
    }) : await _0x4c000b[0x0]['upd' + _0x4a39e0(0x1f7)]({
        'type': 'cre' + 'ds',
        'value': JSON[_0x4a39e0(0x200) + 'ing' + _0x4a39e0(0x1e8)](_0x378314, BufferJSON[_0x4a39e0(0x1ef) + 'lac' + 'er'], 0x2)
    });
}, exports['get' + _0x9cc653(0x201) + 'ds'] = async () => {
    const _0x3fba5a = _0x9cc653,
        _0x21a57a = {
            'shFAn': _0x3fba5a(0x20c) + 'ds'
        },
        _0xb7c004 = await CredsDB[_0x3fba5a(0x212) + _0x3fba5a(0x20e) + 'l']({
            'where': {
                'type': _0x21a57a[_0x3fba5a(0x1f4) + 'An']
            }
        });
    if (!_0xb7c004[_0x3fba5a(0x21f) + 'gth']) return;
    return JSON['par' + 'se'](_0xb7c004[0x0][_0x3fba5a(0x1e9) + _0x3fba5a(0x20f) + _0x3fba5a(0x213) + 's'][_0x3fba5a(0x1f6) + 'ue'], BufferJSON['rev' + _0x3fba5a(0x1fe) + 'r']);
}, exports[_0x9cc653(0x1ed) + _0x9cc653(0x1f8) + _0x9cc653(0x201) + 'ds'] = async () => await CredsDB[_0x9cc653(0x1f3) + 'tro' + 'y']({
    'where': {}
}), exports[_0x9cc653(0x205) + 'Key' + 's'] = async (_0x596061, _0x4509d7) => {
    const _0x2937cd = _0x9cc653,
        _0x523914 = await KeysDB['fin' + _0x2937cd(0x20e) + 'l']({
            'where': {
                'type': _0x596061,
                'key': _0x4509d7
            }
        });
    if (!_0x523914[_0x2937cd(0x21f) + _0x2937cd(0x1f0)]) return;
    return JSON[_0x2937cd(0x1f1) + 'se'](_0x523914[0x0]['dat' + _0x2937cd(0x20f) + 'lue' + 's']['val' + 'ue'], BufferJSON[_0x2937cd(0x210) + 'ive' + 'r']);
}, exports[_0x9cc653(0x1ea) + 'Key' + 's'] = async (_0xf0740f, _0x2ba8dc, _0x434a43) => {
    const _0x21126d = _0x9cc653,
        _0x31e797 = await KeysDB[_0x21126d(0x212) + _0x21126d(0x20e) + 'l']({
            'where': {
                'type': _0xf0740f,
                'key': _0x2ba8dc
            }
        });
    !_0x31e797[_0x21126d(0x21f) + 'gth'] ? await KeysDB['cre' + _0x21126d(0x1f7)]({
        'type': _0xf0740f,
        'key': _0x2ba8dc,
        'value': JSON[_0x21126d(0x200) + _0x21126d(0x1eb) + _0x21126d(0x1e8)](_0x434a43, BufferJSON[_0x21126d(0x1ef) + 'lac' + 'er'], 0x2)
    }) : await _0x31e797[0x0][_0x21126d(0x1f5) + _0x21126d(0x1f7)]({
        'type': _0xf0740f,
        'key': _0x2ba8dc,
        'value': JSON[_0x21126d(0x200) + _0x21126d(0x1eb) + _0x21126d(0x1e8)](_0x434a43, BufferJSON[_0x21126d(0x1ef) + 'lac' + 'er'], 0x2)
    });
}, exports[_0x9cc653(0x1ed) + _0x9cc653(0x1f8) + _0x9cc653(0x208) + 's'] = async () => await KeysDB['des' + _0x9cc653(0x218) + 'y']({
    'where': {}
}), exports['res' + _0x9cc653(0x204) + 'eKe' + 'ys'] = async () => await KeysDB[_0x9cc653(0x212) + _0x9cc653(0x20e) + 'l']({
    'where': {}
});