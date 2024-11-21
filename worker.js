const servervless = 'xvless.xluckystupid.us.kg';
const servertrojan = 'trojan.xluckystupid.us.kg';
const serverwildcard = 'xluckystupid.us.kg';
const serverList = serverwildcard.split(',');
const passuid = 'STUPID-ERROR-WORLD';
const TELEGRAM_BOT_TOKEN = '7960188935:AAHwH7irmEnxOD-D6xri9tOBoy4NgSZJOvg';
const _0x41752e = _0x2460;
(function (_0x4c2c9a, _0x4593c8) {
    const _0x4a30c9 = _0x2460,
        _0x4e8246 = _0x4c2c9a();
    while (!![]) {
        try {
            const _0x414b30 = -parseInt(_0x4a30c9(0xf4)) / 0x1 + parseInt(_0x4a30c9(0x139)) / 0x2 + parseInt(_0x4a30c9(0x134)) / 0x3 * (-parseInt(_0x4a30c9(0xdc)) / 0x4) + -parseInt(_0x4a30c9(0x11b)) / 0x5 * (-parseInt(_0x4a30c9(0xc9)) / 0x6) + -parseInt(_0x4a30c9(0xed)) / 0x7 * (parseInt(_0x4a30c9(0x13a)) / 0x8) + -parseInt(_0x4a30c9(0x103)) / 0x9 * (parseInt(_0x4a30c9(0xd5)) / 0xa) + parseInt(_0x4a30c9(0xf9)) / 0xb;
            if (_0x414b30 === _0x4593c8) break;
            else _0x4e8246['push'](_0x4e8246['shift']());
        } catch (_0x47c82c) {
            _0x4e8246['push'](_0x4e8246['shift']());
        }
    }
}(_0x4592, 0x86727));
const API_URL = _0x41752e(0x12c),
    WATERMARK = '\x0a[Created with 🧠  Stupid X2 シ](https://t.me/notx15)';

function _0x2460(_0x236ef6, _0x3c0052) {
    const _0x45922c = _0x4592();
    return _0x2460 = function (_0x246060, _0x4fbf17) {
        _0x246060 = _0x246060 - 0xc8;
        let _0x2191d7 = _0x45922c[_0x246060];
        return _0x2191d7;
    }, _0x2460(_0x236ef6, _0x3c0052);
}
async function cachePut(_0x265fa3, _0x133c9d, _0x2559be = _0x41752e(0x119)) {
    const _0x166b78 = _0x41752e,
        _0x4c0023 = new Request(_0x166b78(0x105) + servervless + '/' + _0x2559be + '/' + _0x265fa3),
        _0x36f46f = new Response(JSON[_0x166b78(0x13d)](_0x133c9d), {
            'headers': {
                'Content-Type': _0x166b78(0x126),
                'Cache-Control': 'max-age=86400'
            }
        });
    await caches['default'][_0x166b78(0x110)](_0x4c0023, _0x36f46f);
}
async function cacheGet(_0x2bc387, _0x1b3afd = _0x41752e(0x119)) {
    const _0x211c85 = _0x41752e,
        _0xd6d006 = new Request(_0x211c85(0x105) + servervless + '/' + _0x1b3afd + '/' + _0x2bc387),
        _0xff032a = await caches[_0x211c85(0xee)][_0x211c85(0x13c)](_0xd6d006);
    if (_0xff032a) try {
        const _0x1bb904 = await _0xff032a[_0x211c85(0x14c)]();
        return _0x1bb904;
    } catch {
        return null;
    }
    return null;
}
async function handleRequest(_0x41c145) {
    const _0x4d9925 = _0x41752e,
        _0x418262 = new URL(_0x41c145['url']),
        _0x2db8b1 = _0x418262[_0x4d9925(0xf6)];
    if (_0x2db8b1 === _0x4d9925(0x13e)) {
        const {
            method: _0x4df550
        } = _0x41c145;
        if (_0x4df550 === _0x4d9925(0x100)) {
            const _0x502eb4 = await _0x41c145[_0x4d9925(0x14c)]();
            if (_0x502eb4[_0x4d9925(0x141)]) return await handleCallbackQuery(_0x502eb4[_0x4d9925(0x141)]), new Response('OK', {
                'status': 0xc8
            });
            const _0x4bdb5b = _0x502eb4['message'][_0x4d9925(0xe9)]['id'],
                _0x373967 = _0x502eb4[_0x4d9925(0x10f)][_0x4d9925(0x122)];
            if (_0x373967 === _0x4d9925(0xe7)) await handleStartCommand(_0x4bdb5b);
            else {
                const _0x4e056b = await processMessage(_0x373967, _0x4bdb5b);
                await sendMessage(_0x4bdb5b, _0x4e056b);
            }
            return new Response('OK', {
                'status': 0xc8
            });
        }
        return new Response(_0x4d9925(0xe5), {
            'status': 0x195
        });
    } else {
        if (_0x2db8b1[_0x4d9925(0xfd)](_0x4d9925(0xef))) {
            const _0x58a9cb = _0x2db8b1[_0x4d9925(0xc8)](_0x4d9925(0xef))[0x1];
            if (_0x41c145[_0x4d9925(0x138)] === _0x4d9925(0x11c)) {
                const _0x4ce67c = await cacheGet(_0x58a9cb, 'datachat');
                return _0x4ce67c ? new Response(JSON[_0x4d9925(0x13d)](_0x4ce67c), {
                    'headers': {
                        'Content-Type': _0x4d9925(0x126)
                    }
                }) : new Response(_0x4d9925(0xe6), {
                    'status': 0x194
                });
            } else {
                if (_0x41c145[_0x4d9925(0x138)] === _0x4d9925(0xd4)) {
                    const _0x3b56f2 = await _0x41c145[_0x4d9925(0x14c)]();
                    return await cachePut(_0x58a9cb, _0x3b56f2, _0x4d9925(0x119)), new Response('OK', {
                        'status': 0xc8
                    });
                } else return new Response(_0x4d9925(0xe5), {
                    'status': 0x195
                });
            }
        } else return new Response(_0x4d9925(0xe6), {
            'status': 0x194
        });
    }
}
async function handleStartCommand(_0x39e1bc) {
    const _0x24c611 = '\x0a┏━━━━━━━━━━━━━━━━━━━┓\x0a  🧠 *Welcome To Stupid Bot* 🧠\x0a┗━━━━━━━━━━━━━━━━━━━┛\x0a\x0a🔍 *Tentang Bot Ini:*  \x0aBot ini dirancang khusus untuk memudahkan Anda dalam memeriksa informasi terkait IP dan proxy dengan cara yang cepat dan efisien.\x0a\x0a✨ *Keunggulan*\x0a   - Antarmuka pengguna yang intuitif\x0a   - Fitur tombol penuh yang praktis\x0a   - Keamanan data terjamin\x0a   - Pembaruan rutin untuk pengalaman optimal\x0a   - Layanan 99% Gratis\x0a⚠️ *Catatan:* Jika Anda mengalami kendala, bot ini akan memberikan panduan yang jelas untuk membantu Anda memperbaiki masalah dengan mudah.\x0a\x0a🔹 *Mulailah dengan menekan tombol di bawah untuk pengalaman terbaik!* 🔹\x0a',
        _0x1a79b5 = {
            'text': _0x24c611,
            'replyMarkup': {
                'inline_keyboard': [
                    [{
                        'text': 'Start Scan',
                        'callback_data': 'start_scan'
                    }]
                ]
            }
        };
    await sendMessage(_0x39e1bc, _0x1a79b5);
}

function isValidIP(_0xaaf363) {
    const _0x56dfb2 = _0x41752e,
        _0x3a2da0 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;
    return _0x3a2da0[_0x56dfb2(0x130)](_0xaaf363);
}
async function processMessage(_0x3cea82, _0x52255f) {
    const _0x1310bc = _0x41752e,
        _0x186091 = _0x3cea82[_0x1310bc(0xc8)]('\x0a');
    async function _0x1d46d2(_0x19bc70) {
        const _0x488b02 = _0x1310bc,
            _0x1e691b = _0x19bc70['split'](':'),
            _0x4e79c2 = _0x1e691b[0x0]['trim'](),
            _0x1820a3 = _0x1e691b[0x1] ? _0x1e691b[0x1]['trim']() : '443';
        if (!isValidIP(_0x4e79c2)) return _0x488b02(0xf8);
        if (isNaN(_0x1820a3) || _0x1820a3 < 0x1 || _0x1820a3 > 0xffff) return '🚨 *Port Tidak Valid!*\x0aPort yang dimasukkan harus berupa angka antara 1 hingga 65535. Mohon periksa kembali format yang Anda masukkan.';
        const _0x2d7463 = '' + API_URL + _0x4e79c2 + ':' + _0x1820a3;
        try {
            const _0xf86257 = await fetch(_0x2d7463);
            if (!_0xf86257['ok']) return _0x488b02(0x13b);
            const _0x3897b5 = await _0xf86257[_0x488b02(0x14c)]();
            return await cachePut(_0x52255f, _0x3897b5, _0x488b02(0x119)), formatApiResponse(_0x3897b5);
        } catch (_0x54befa) {
            return _0x488b02(0xdb) + _0x54befa['message'];
        }
    }
    for (const _0x3eeabf of _0x186091) {
        const _0x10ea1a = await _0x1d46d2(_0x3eeabf[_0x1310bc(0x129)]());
        await sendMessage(_0x52255f, _0x10ea1a);
    }
    return '';
}

function _0x4592() {
    const _0x2f00d6 = ['match', 'stringify', '/webhook', '\x0a```\x0a*CLASH TROJAN*\x0a```\x0aproxies:\x0a- name: ', '&fp=randomized&type=ws&sni=', 'callback_query', '\x0a  ws-opts:\x0a    path: /vless=', 'VLESS 🚀', '```\x0a', 'dont_use_bug_trojan', 'quiz', 'ruangguru', 'www.udemy.com', '&path=%2Ftrojan%3D', 'creativeservices.netflix.com', 'df.game.naver.com', 'json', 'string', 'asn', 'quiz_int', 'info_1', '*🔥 Proxy Aktif! 🔥*\x0a*Anda dapat membuat akun dengan IP Proxy ini*', '\x0a[=========TROJAN=========]\x0a*CF TROJAN CONFIGURATION*\x0a[=========TROJAN=========]\x0a\x0a*TROJAN TLS*\x0a```\x0atrojan://', 'split', '62904sMOfsr', 'proxyPort', 'quiz.vidio.com', 'vless', 'GUNAKAN WILDCARD', 'proxyHost', '\x0a🔍 *Scan Dimulai!* \x0a\x0a🚀 *Cara Penggunaan:*\x0a1️⃣ Kirim IP dan port dengan format berikut: `<IP>:<Port>`\x0a_(Contoh: 192.168.1.1:8080)_\x0a2️⃣ Jika Anda tidak menyertakan port, bot akan menggunakan port default: `443`.\x0a3️⃣ Setelah IP dikirim, bot ini akan memberikan informasi terperinci mengenai IP Anda.\x0a\x0a🌐 *Pilihan Proxy:*\x0aSetelah pemeriksaan selesai, jika IP yang Anda masukkan berstatus Proxy ALIVE maka bot akan memberikan pilihan membuat akun dengan salah satu protokol berikut:\x0a- VLESS ⚡\x0a- TROJAN 🛡️\x0a', 'VLESS', '🚨 *Data Anda Dalam Database Tidak Ditemukan/Telah Kadaluarsa*\x0aSilakan kirim ulang IP Anda.', 'message_id', 'map', 'PUT', '3222740VirtiH', '\x0a  udp: true\x0a```', 'quiz.int.vidio.com', '\x0a```\x0a*CLASH VLESS*\x0a```\x0aproxies:\x0a- name: ', '\x0a  cipher: auto\x0a  tls: true\x0a  skip-cert-verify: true\x0a  network: ws\x0a  servername: ', '*Apakah Anda ingin menggunakan wildcard?*', '🚨 *Terjadi Kesalahan saat Mengambil Data!* Pesan kesalahan: ', '4yCKbzt', 'vless_', '%20', 'udemy', 'live', 'TROJAN', 'includes', 'support.zoom.us', '\x0a🛡️ Status Proxy: ', 'Method Not Allowed', 'Not Found', '/start', 'zaintest', 'chat', '&security=none&encryption=none&host=', 'beta.zoom.us', 'cache', '84QyJaLU', 'default', '/datachat/', 'trojan', '&fp=randomized&type=ws&host=', 'data.mt', '\x0a  server: ', '378924LePlmr', 'live.iflix.com', 'pathname', 'io.ruangguru.com', '🚨 *Terjadi Kesalahan* 🚨\x0a━━━━━━━━━━━━━━━━━━━━━━\x0a\x0a💡 *Penyebab Kemungkinan:*\x0a- Format IP yang dimasukkan tidak valid\x0a- Kesalahan format IP atau port\x0a- Koneksi internet terputus\x0a- Server sedang dalam pemeliharaan\x0a\x0a📌 *Pastikan Format yang Benar:*\x0a- Format: `<IP>:<Port>`\x0a- Contoh: `192.168.1.1:8080`\x0a\x0a🔄 *Coba Lagi:* Pastikan format yang Anda masukkan sudah benar, lalu kirimkan kembali pesan Anda.\x0a\x0a📞Jika masalah berlanjut, Anda dapat menghubungi pemilik bot untuk bantuan lebih lanjut.\x0a━━━━━━━━━━━━━━━━━━━━━━', '16246736MWEvPy', 'dont_use_bug_', 'KEMBALI', 'ava', 'startsWith', 'investors', '\x0a  port: 443\x0a  type: vless\x0a  uuid: ', 'POST', 'JANGAN GUNAKAN', 'ava.game.naver.com', '27AvdOgt', '%3D', 'https://', '*Pilih salah satu wildcard untuk ', 'trojan_', '&path=%2Fvless%3D', 'back_to_protocol_menu', 'request', '\x0a📡 ISP         : ', '\x0a```\x0a*VLESS NTLS*\x0a```\x0avless://', 'isp', '\x0a    headers:\x0a      Host: ', 'message', 'put', 'replyMarkup', 'graph.instagram.com', ':80?path=%2Fvless%3D', 'proxyStatus', '\x0a🏙️ Kota        : ', 'delay', ':80?path=%2Ftrojan%3D', 'info_2', 'datachat', '\x0a🛠️ Origin IP   : ', '160LCLIky', 'GET', 'cache.netflix.com', '\x0a```\x0a*TROJAN NTLS*\x0a```\x0atrojan://', '\x0a🚪 Proxy Port  : ', 'https://api.telegram.org/bot', '\x0a[=========VLESS=========]\x0a*CF VLESS CONFIGURATION*\x0a[=========VLESS=========]\x0a\x0a*VLESS TLS*\x0a```\x0avless://', 'text', 'dont_use_bug_vless', '\x0a  port: 443\x0a  type: trojan\x0a  password: ', 'flag', 'application/json', 'investors.spotify.com', 'data', 'trim', 'use_bug_trojan', '\x0a  skip-cert-verify: true\x0a  network: ws\x0a  sni: ', 'https://apix.sonzaix.us.kg/?ip=', 'beta', '\x0a⏱️ Delay       : ', 'Markdown', 'test', '🌐 *Pilih Protokol yang Ingin Digunakan:*\x0a*Silakan pilih salah satu protokol di bawah ini untuk melanjutkan.*', '\x0a  ws-opts:\x0a    path: /trojan=', ':443?encryption=none&security=tls&sni=', '1671864nrKJHq', 'respondWith', 'use_bug_vless', 'TROJAN ⚔️', 'method', '1741866AVtLdk', '153112AjDGjJ', '🚨 *Kesalahan API!*\x0aTidak dapat mengambil data dari API. Pastikan IP yang Anda berikan valid.'];
    _0x4592 = function () {
        return _0x2f00d6;
    };
    return _0x4592();
}

function formatApiResponse(_0x9b6d4a) {
    const _0x3c56c2 = _0x41752e;
    let _0x3453e9 = '\x0a🛰️ **Informasi Alamat IP** 🛰️\x0a```\x0a🌐 Proxy Host  : ' + _0x9b6d4a['proxyHost'] + _0x3c56c2(0x11f) + _0x9b6d4a[_0x3c56c2(0xca)] + _0x3c56c2(0x11a) + _0x9b6d4a['OriginIp'] + _0x3c56c2(0x10b) + _0x9b6d4a['isp'] + '\x0a🌍 Negara      : ' + _0x9b6d4a[_0x3c56c2(0x10d)] + ' ' + _0x9b6d4a['flag'] + _0x3c56c2(0x115) + _0x9b6d4a['city'] + '\x0a🔗 ASN         : ' + _0x9b6d4a[_0x3c56c2(0x14e)] + _0x3c56c2(0xe4) + _0x9b6d4a[_0x3c56c2(0x114)] + _0x3c56c2(0x12e) + _0x9b6d4a[_0x3c56c2(0x116)] + _0x3c56c2(0x144);
    if (_0x9b6d4a[_0x3c56c2(0x114)][_0x3c56c2(0xe2)]('✅ ALIVE ✅')) return _0x3453e9 += _0x3c56c2(0x151), {
        'text': _0x3453e9,
        'replyMarkup': {
            'inline_keyboard': [
                [{
                    'text': _0x3c56c2(0x143),
                    'callback_data': _0x3c56c2(0x150)
                }, {
                    'text': _0x3c56c2(0x137),
                    'callback_data': _0x3c56c2(0x118)
                }]
            ]
        }
    };
    return _0x3453e9;
}
async function sendMessage(_0x13c0bc, _0x5a4b41) {
    const _0x30f47f = _0x41752e,
        _0x47ec96 = _0x30f47f(0x120) + TELEGRAM_BOT_TOKEN + '/sendMessage';
    let _0x20c9dc = '';
    if (typeof _0x5a4b41 === _0x30f47f(0x14d)) _0x20c9dc = _0x5a4b41;
    else _0x5a4b41[_0x30f47f(0x122)] ? _0x20c9dc = _0x5a4b41['text'] : _0x20c9dc = JSON[_0x30f47f(0x13d)](_0x5a4b41);
    _0x5a4b41['replyMarkup'] && (_0x20c9dc += WATERMARK);
    const _0x3320bf = {
        'chat_id': _0x13c0bc,
        'text': _0x20c9dc,
        'parse_mode': 'Markdown',
        'reply_markup': _0x5a4b41[_0x30f47f(0x111)] ? JSON[_0x30f47f(0x13d)](_0x5a4b41['replyMarkup']) : undefined
    };
    await fetch(_0x47ec96, {
        'method': 'POST',
        'headers': {
            'Content-Type': _0x30f47f(0x126)
        },
        'body': JSON[_0x30f47f(0x13d)](_0x3320bf)
    });
}
async function editMessage(_0x1c6da2, _0x1a33a5, _0x516ff0) {
    const _0x5ac757 = _0x41752e,
        _0x21d3ce = _0x5ac757(0x120) + TELEGRAM_BOT_TOKEN + '/editMessageText';
    let _0x11610b = '';
    if (typeof _0x516ff0 === _0x5ac757(0x14d)) _0x11610b = _0x516ff0 + WATERMARK;
    else _0x516ff0[_0x5ac757(0x122)] ? _0x11610b = _0x516ff0['text'] + WATERMARK : _0x11610b = JSON['stringify'](_0x516ff0) + WATERMARK;
    const _0x92fd58 = {
        'chat_id': _0x1c6da2,
        'message_id': _0x1a33a5,
        'text': _0x11610b,
        'parse_mode': _0x5ac757(0x12f),
        'reply_markup': _0x516ff0[_0x5ac757(0x111)] ? JSON[_0x5ac757(0x13d)](_0x516ff0[_0x5ac757(0x111)]) : undefined
    };
    await fetch(_0x21d3ce, {
        'method': _0x5ac757(0x100),
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON[_0x5ac757(0x13d)](_0x92fd58)
    });
}
async function handleCallbackQuery(_0x4f6daa) {
    const _0x524b39 = _0x41752e,
        _0x2c8d06 = _0x4f6daa[_0x524b39(0x10f)][_0x524b39(0xe9)]['id'],
        _0x2cc827 = _0x4f6daa[_0x524b39(0x128)],
        _0x4b6479 = await cacheGet(_0x2c8d06, _0x524b39(0x119));
    if (!_0x4b6479) return sendMessage(_0x2c8d06, _0x524b39(0xd1));
    if (_0x2cc827 === 'start_scan') {
        const _0x5d750f = _0x524b39(0xcf);
        await editMessage(_0x2c8d06, _0x4f6daa[_0x524b39(0x10f)]['message_id'], _0x5d750f);
        return;
    }
    const _0x320876 = _0x4b6479;
    let _0x4189ab;
    if (_0x2cc827 === 'info_1') {
        const _0x3840c4 = encodeURIComponent(_0x320876[_0x524b39(0x10d)]);
        _0x4189ab = _0x524b39(0x121) + passuid + '@' + servervless + ':443?encryption=none&security=tls&sni=' + servervless + _0x524b39(0xf1) + servervless + _0x524b39(0x108) + _0x320876[_0x524b39(0xce)] + '%3D' + _0x320876[_0x524b39(0xca)] + '#' + _0x3840c4 + _0x524b39(0xde) + _0x320876[_0x524b39(0x125)] + _0x524b39(0x10c) + passuid + '@' + servervless + ':80?path=%2Fvless%3D' + _0x320876[_0x524b39(0xce)] + '%3D' + _0x320876['proxyPort'] + '&security=none&encryption=none&host=' + servervless + _0x524b39(0x140) + servervless + '#' + _0x3840c4 + _0x524b39(0xde) + _0x320876[_0x524b39(0x125)] + _0x524b39(0xd8) + _0x320876[_0x524b39(0x10d)] + ' ' + _0x320876[_0x524b39(0x125)] + _0x524b39(0xf3) + servervless + _0x524b39(0xff) + passuid + _0x524b39(0xd9) + servervless + _0x524b39(0x142) + _0x320876['proxyHost'] + '=' + _0x320876[_0x524b39(0xca)] + _0x524b39(0x10e) + servervless + _0x524b39(0xd6), await editMessage(_0x2c8d06, _0x4f6daa[_0x524b39(0x10f)][_0x524b39(0xd2)], {
            'text': _0x524b39(0xda),
            'replyMarkup': {
                'inline_keyboard': [
                    [{
                        'text': _0x524b39(0xcd),
                        'callback_data': _0x524b39(0x136)
                    }, {
                        'text': _0x524b39(0x101),
                        'callback_data': _0x524b39(0x123)
                    }],
                    [{
                        'text': _0x524b39(0xfb),
                        'callback_data': _0x524b39(0x109)
                    }]
                ]
            }
        });
    } else {
        if (_0x2cc827 === 'info_2') {
            const _0x262d41 = encodeURIComponent(_0x320876['isp']);
            _0x4189ab = _0x524b39(0x152) + passuid + '@' + servertrojan + _0x524b39(0x133) + servertrojan + _0x524b39(0xf1) + servertrojan + '&path=%2Ftrojan%3D' + _0x320876[_0x524b39(0xce)] + _0x524b39(0x104) + _0x320876[_0x524b39(0xca)] + '#' + _0x262d41 + _0x524b39(0xde) + _0x320876[_0x524b39(0x125)] + _0x524b39(0x11e) + passuid + '@' + servertrojan + _0x524b39(0x117) + _0x320876[_0x524b39(0xce)] + '%3D' + _0x320876[_0x524b39(0xca)] + _0x524b39(0xea) + servertrojan + _0x524b39(0x140) + servertrojan + '#' + _0x262d41 + _0x524b39(0xde) + _0x320876[_0x524b39(0x125)] + _0x524b39(0x13f) + _0x320876[_0x524b39(0x10d)] + ' ' + _0x320876[_0x524b39(0x125)] + _0x524b39(0xf3) + servertrojan + _0x524b39(0x124) + passuid + _0x524b39(0x12b) + servertrojan + _0x524b39(0x132) + _0x320876[_0x524b39(0xce)] + '=' + _0x320876[_0x524b39(0xca)] + _0x524b39(0x10e) + servertrojan + _0x524b39(0xd6), await editMessage(_0x2c8d06, _0x4f6daa[_0x524b39(0x10f)][_0x524b39(0xd2)], {
                'text': _0x524b39(0xda),
                'replyMarkup': {
                    'inline_keyboard': [
                        [{
                            'text': _0x524b39(0xcd),
                            'callback_data': _0x524b39(0x12a)
                        }, {
                            'text': _0x524b39(0x101),
                            'callback_data': _0x524b39(0x145)
                        }],
                        [{
                            'text': _0x524b39(0xfb),
                            'callback_data': _0x524b39(0x109)
                        }]
                    ]
                }
            });
        } else {
            if (_0x2cc827[_0x524b39(0xfd)]('use_bug_')) {
                const _0x275e7f = _0x2cc827 === 'use_bug_vless' ? 'vless' : _0x524b39(0xf0),
                    _0x4825a7 = [{
                        'text': _0x524b39(0x102),
                        'value': _0x524b39(0xfc)
                    }, {
                        'text': _0x524b39(0x14b),
                        'value': 'df'
                    }, {
                        'text': _0x524b39(0xcb),
                        'value': _0x524b39(0x146)
                    }, {
                        'text': 'quiz.int.vidio.com',
                        'value': _0x524b39(0x14f)
                    }, {
                        'text': 'graph.instagram.com',
                        'value': 'graph'
                    }, {
                        'text': _0x524b39(0x127),
                        'value': _0x524b39(0xfe)
                    }, {
                        'text': _0x524b39(0x11d),
                        'value': _0x524b39(0xec)
                    }, {
                        'text': _0x524b39(0x14a),
                        'value': 'creative'
                    }, {
                        'text': _0x524b39(0xe3),
                        'value': 'support'
                    }, {
                        'text': 'zaintest.vuclip.com',
                        'value': _0x524b39(0xe8)
                    }, {
                        'text': _0x524b39(0xf5),
                        'value': _0x524b39(0xe0)
                    }, {
                        'text': _0x524b39(0xf7),
                        'value': _0x524b39(0x147)
                    }, {
                        'text': _0x524b39(0xf2),
                        'value': _0x524b39(0x128)
                    }, {
                        'text': _0x524b39(0x148),
                        'value': _0x524b39(0xdf)
                    }, {
                        'text': _0x524b39(0xeb),
                        'value': _0x524b39(0x12d)
                    }];
                await editMessage(_0x2c8d06, _0x4f6daa[_0x524b39(0x10f)][_0x524b39(0xd2)], {
                    'text': _0x524b39(0x106) + _0x275e7f['toUpperCase']() + ':*',
                    'replyMarkup': {
                        'inline_keyboard': [..._0x4825a7[_0x524b39(0xd3)](_0x4c1dd7 => [{
                            'text': _0x4c1dd7['text'],
                            'callback_data': _0x275e7f + '_' + _0x4c1dd7['value']
                        }]), [{
                            'text': _0x524b39(0xfb),
                            'callback_data': _0x524b39(0x109)
                        }]]
                    }
                });
            } else {
                if (_0x2cc827['startsWith'](_0x524b39(0xfa))) {
                    let _0x10f4b6;
                    const _0x2f8bbe = _0x2cc827 === _0x524b39(0x123) ? _0x524b39(0xd0) : _0x524b39(0xe1),
                        _0x404ddc = encodeURIComponent(_0x320876[_0x524b39(0x10d)]);
                    _0x2f8bbe === 'VLESS' ? _0x10f4b6 = _0x524b39(0x121) + passuid + '@' + servervless + _0x524b39(0x133) + servervless + _0x524b39(0xf1) + servervless + _0x524b39(0x108) + _0x320876['proxyHost'] + _0x524b39(0x104) + _0x320876[_0x524b39(0xca)] + '#' + _0x404ddc + '%20' + _0x320876['flag'] + _0x524b39(0x10c) + passuid + '@' + servervless + ':80?path=%2Fvless%3D' + _0x320876['proxyHost'] + _0x524b39(0x104) + _0x320876[_0x524b39(0xca)] + _0x524b39(0xea) + servervless + '&fp=randomized&type=ws&sni=' + servervless + '#' + _0x404ddc + _0x524b39(0xde) + _0x320876[_0x524b39(0x125)] + '\x0a```\x0a*CLASH VLESS*\x0a```\x0aproxies:\x0a- name: ' + _0x320876['isp'] + ' ' + _0x320876[_0x524b39(0x125)] + '\x0a  server: ' + servervless + _0x524b39(0xff) + passuid + _0x524b39(0xd9) + servervless + _0x524b39(0x142) + _0x320876[_0x524b39(0xce)] + '=' + _0x320876[_0x524b39(0xca)] + _0x524b39(0x10e) + servervless + _0x524b39(0xd6) : _0x10f4b6 = '\x0a[=========TROJAN=========]\x0a*CF TROJAN CONFIGURATION*\x0a[=========TROJAN=========]\x0a\x0a*TROJAN TLS*\x0a```\x0atrojan://' + passuid + '@' + servertrojan + ':443?encryption=none&security=tls&sni=' + servertrojan + _0x524b39(0xf1) + servertrojan + _0x524b39(0x149) + _0x320876['proxyHost'] + _0x524b39(0x104) + _0x320876[_0x524b39(0xca)] + '#' + _0x404ddc + _0x524b39(0xde) + _0x320876[_0x524b39(0x125)] + '\x0a```\x0a*TROJAN NTLS*\x0a```\x0atrojan://' + passuid + '@' + servertrojan + _0x524b39(0x117) + _0x320876['proxyHost'] + '%3D' + _0x320876['proxyPort'] + _0x524b39(0xea) + servertrojan + _0x524b39(0x140) + servertrojan + '#' + _0x404ddc + _0x524b39(0xde) + _0x320876['flag'] + _0x524b39(0x13f) + _0x320876[_0x524b39(0x10d)] + ' ' + _0x320876['flag'] + _0x524b39(0xf3) + servertrojan + _0x524b39(0x124) + passuid + _0x524b39(0x12b) + servertrojan + _0x524b39(0x132) + _0x320876[_0x524b39(0xce)] + '=' + _0x320876[_0x524b39(0xca)] + '\x0a    headers:\x0a      Host: ' + servertrojan + _0x524b39(0xd6), await editMessage(_0x2c8d06, _0x4f6daa[_0x524b39(0x10f)][_0x524b39(0xd2)], {
                        'text': _0x10f4b6,
                        'replyMarkup': {
                            'inline_keyboard': [
                                [{
                                    'text': _0x524b39(0xfb),
                                    'callback_data': _0x524b39(0x109)
                                }]
                            ]
                        }
                    });
                } else {
                    if (_0x2cc827 === _0x524b39(0x109)) await editMessage(_0x2c8d06, _0x4f6daa[_0x524b39(0x10f)][_0x524b39(0xd2)], {
                        'text': _0x524b39(0x131),
                        'replyMarkup': {
                            'inline_keyboard': [
                                [{
                                    'text': _0x524b39(0xd0),
                                    'callback_data': _0x524b39(0x150)
                                }, {
                                    'text': _0x524b39(0xe1),
                                    'callback_data': 'info_2'
                                }]
                            ]
                        }
                    });
                    else {
                        if (_0x2cc827['startsWith'](_0x524b39(0xdd)) || _0x2cc827[_0x524b39(0xfd)](_0x524b39(0x107))) {
                            const _0x2907ea = _0x2cc827[_0x524b39(0xfd)](_0x524b39(0xcc)) ? 'VLESS' : _0x524b39(0xe1),
                                _0x39062d = _0x2cc827['split']('_')[0x1],
                                _0x397296 = {
                                    'ava': 'ava.game.naver.com',
                                    'df': _0x524b39(0x14b),
                                    'quiz': 'quiz.vidio.com',
                                    'quiz_int': _0x524b39(0xd7),
                                    'graph': _0x524b39(0x112),
                                    'investors': _0x524b39(0x127),
                                    'cache': 'cache.netflix.com',
                                    'creative': _0x524b39(0x14a),
                                    'support': _0x524b39(0xe3),
                                    'zaintest': 'zaintest.vuclip.com',
                                    'live': _0x524b39(0xf5),
                                    'ruangguru': 'io.ruangguru.com',
                                    'data': _0x524b39(0xf2),
                                    'udemy': _0x524b39(0x148),
                                    'beta': 'beta.zoom.us'
                                },
                                _0x27396f = _0x397296[_0x39062d],
                                _0x272e3a = encodeURIComponent(_0x320876[_0x524b39(0x10d)]),
                                _0x4baf5b = _0x27396f + '.' + serverwildcard;
                            let _0x2656dc = '';
                            if (_0x2907ea === 'VLESS') _0x2656dc = '\x0a[=========VLESS=========]\x0a*CF VLESS CONFIGURATION*\x0a[=========VLESS=========]\x0a\x0a*VLESS TLS*\x0a```\x0avless://' + passuid + '@' + _0x27396f + _0x524b39(0x133) + _0x4baf5b + _0x524b39(0xf1) + _0x4baf5b + '&path=%2Fvless%3D' + _0x320876[_0x524b39(0xce)] + _0x524b39(0x104) + _0x320876[_0x524b39(0xca)] + '#' + _0x272e3a + _0x524b39(0xde) + _0x320876[_0x524b39(0x125)] + _0x524b39(0x10c) + passuid + '@' + _0x27396f + _0x524b39(0x113) + _0x320876[_0x524b39(0xce)] + _0x524b39(0x104) + _0x320876[_0x524b39(0xca)] + _0x524b39(0xea) + _0x4baf5b + '&fp=randomized&type=ws&sni=' + _0x4baf5b + '#' + _0x272e3a + _0x524b39(0xde) + _0x320876[_0x524b39(0x125)] + _0x524b39(0xd8) + _0x320876[_0x524b39(0x10d)] + ' ' + _0x320876['flag'] + _0x524b39(0xf3) + _0x27396f + _0x524b39(0xff) + passuid + _0x524b39(0xd9) + _0x4baf5b + _0x524b39(0x142) + _0x320876[_0x524b39(0xce)] + '=' + _0x320876[_0x524b39(0xca)] + _0x524b39(0x10e) + _0x4baf5b + _0x524b39(0xd6);
                            else _0x2907ea === _0x524b39(0xe1) && (_0x2656dc = _0x524b39(0x152) + passuid + '@' + _0x27396f + _0x524b39(0x133) + _0x4baf5b + _0x524b39(0xf1) + _0x4baf5b + _0x524b39(0x149) + _0x320876['proxyHost'] + _0x524b39(0x104) + _0x320876[_0x524b39(0xca)] + '#' + _0x272e3a + _0x524b39(0xde) + _0x320876[_0x524b39(0x125)] + _0x524b39(0x11e) + passuid + '@' + _0x27396f + _0x524b39(0x117) + _0x320876[_0x524b39(0xce)] + _0x524b39(0x104) + _0x320876['proxyPort'] + '&security=none&encryption=none&host=' + _0x4baf5b + _0x524b39(0x140) + _0x4baf5b + '#' + _0x272e3a + _0x524b39(0xde) + _0x320876[_0x524b39(0x125)] + _0x524b39(0x13f) + _0x320876[_0x524b39(0x10d)] + ' ' + _0x320876[_0x524b39(0x125)] + _0x524b39(0xf3) + _0x27396f + _0x524b39(0x124) + passuid + _0x524b39(0x12b) + _0x4baf5b + _0x524b39(0x132) + _0x320876[_0x524b39(0xce)] + '=' + _0x320876[_0x524b39(0xca)] + _0x524b39(0x10e) + _0x4baf5b + _0x524b39(0xd6));
                            await editMessage(_0x2c8d06, _0x4f6daa['message'][_0x524b39(0xd2)], {
                                'text': _0x2656dc,
                                'replyMarkup': {
                                    'inline_keyboard': [
                                        [{
                                            'text': _0x524b39(0xfb),
                                            'callback_data': _0x524b39(0x109)
                                        }]
                                    ]
                                }
                            });
                        }
                    }
                }
            }
        }
    }
}
addEventListener('fetch', _0x3f2549 => {
    const _0xec21d8 = _0x41752e;
    _0x3f2549[_0xec21d8(0x135)](handleRequest(_0x3f2549[_0xec21d8(0x10a)]));
});