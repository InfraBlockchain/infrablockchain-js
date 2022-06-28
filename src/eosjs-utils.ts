import Long from 'long';

const charmap = '.12345abcdefghijklmnopqrstuvwxyz';

const charidx = (ch: string) => {
    const idx = charmap.indexOf(ch);
    if (idx === -1)
        throw new TypeError(`Invalid character: '${ch}'`);

    return idx;
};

/** Original Name encode and decode logic is in github.com/eosio/eos  native.hpp */
/**
      Encode a name (a base32 string) to a number.
      For performance reasons, the blockchain uses the numerical encoding of strings
      for very common types like account names.
 *
      @see types.hpp string_to_name
      @arg {string} name - A string to encode, up to 12 characters long.
      @return {string<uint64>} - compressed string (from name arg).  A string is
        always used because a number could exceed JavaScript's 52 bit limit.
 */
export const encodeName = (name: string, littleEndian = true) => {
    if (typeof name !== 'string')
        throw new TypeError('name parameter is a required string');

    if (name.length > 12)
        throw new TypeError('A name can be up to 12 characters long');

    let bitstr = '';
    for (let i = 0; i <= 12; i++) { // process all 64 bits (even if name is short)
        const c = i < name.length ? charidx(name[i]) : 0;
        const bitlen = i < 12 ? 5 : 4;
        let bits = Number(c).toString(2);
        if (bits.length > bitlen) {
            throw new TypeError('Invalid name ' + name);
        }
        bits = '0'.repeat(bitlen - bits.length) + bits;
        bitstr += bits;
    }

    const value = Long.fromString(bitstr, true, 2);

    // convert to LITTLE_ENDIAN
    let leHex = '';
    const bytes = littleEndian ? value.toBytesLE() : value.toBytesBE();
    for (const b of bytes) {
        const n = Number(b).toString(16);
        leHex += (n.length === 1 ? '0' : '') + n;
    }
    return leHex;
};