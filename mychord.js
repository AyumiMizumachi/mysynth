const NOTE_VAL_DICT = {
    'Ab': 8, 'A': 9, 'A#': 10, 'Bb': 10, 'B': 11,
    'Cb': 11, 'C': 0, 'C#': 1, 'Db': 1, 'D': 2,
    'D#': 3, 'Eb': 3, 'E': 4, 'E#': 5, 'F': 5,
    'F#': 6, 'Gb': 6, 'G': 7, 'G#': 8
};
const VAL_NOT_DICT = {
    0: [ 'C', 'B#' ],
    1: [ 'C#', 'Db' ],
    2: [ 'D' ],
    3: [ 'D#', 'Eb' ],
    4: [ 'E', 'Fb' ],
    5: [ 'F', 'E#' ],
    6: [ 'F#', 'Gb' ],
    7: [ 'G' ],
    8: [ 'G#', 'Ab' ],
    9: [ 'A' ],
    10: [ 'A#', 'Bb' ],
    11: [ 'B', 'Cb' ]
};
const SHARPED_SCALE = {
    0: 'C', 1: 'C#', 2: 'D', 3: 'D#',
    4: 'E', 5: 'F', 6: 'F#', 7: 'G',
    8: 'G#', 9: 'A', 10: 'A#', 11: 'B'
};
FLATTED_SCALE = {
    0: 'C', 1: 'Db', 2: 'D', 3: 'Eb',
    4: 'E', 5: 'F', 6: 'Gb', 7: 'G',
    8: 'Ab', 9: 'A', 10: 'Bb', 11: 'B'
};
TRUNK_SCALE = {
    0: 'C', 1: 'D', 2: 'E', 3: 'F',
    4: 'G', 5: 'A', 6: 'B'
};
SCALE_VAL_DICT = {
    'Fb': FLATTED_SCALE,
    'Cb': FLATTED_SCALE,
    'Gb': FLATTED_SCALE,
    'Db': FLATTED_SCALE,
    'Ab': FLATTED_SCALE,
    'Eb': FLATTED_SCALE,
    'Bb': FLATTED_SCALE,
    'F': FLATTED_SCALE,
    'C': SHARPED_SCALE,
    'G': SHARPED_SCALE,
    'D': SHARPED_SCALE,
    'A': SHARPED_SCALE,
    'E': SHARPED_SCALE,
    'B': SHARPED_SCALE,
    'F#': SHARPED_SCALE,
    'C#': SHARPED_SCALE,
    'G#': SHARPED_SCALE,
    'D#': SHARPED_SCALE,
    'A#': SHARPED_SCALE
};
RELATIVE_KEY_DICT = {
    'Ion': [0, 2, 4, 5, 7, 9, 11],  // Ionian
    'Maj': [0, 2, 4, 5, 7, 9, 11],      // Major
    'Dor': [0, 2, 3, 5, 7, 9, 10],  // Dorian
    'Phr': [0, 1, 3, 5, 7, 8, 10],  // Phrygian
    'Lyd': [0, 2, 4, 6, 7, 9, 11],  // Lydian
    'Mix': [0, 2, 4, 5, 7, 9, 10],  // Mixolydian
    'Aeo': [0, 2, 3, 5, 7, 8, 10],  // Aeonian
    'NMn': [0, 2, 3, 5, 7, 8, 10],      // Natural Minor
    'Loc': [0, 1, 3, 5, 6, 8, 10],  // Locrian
};

DEFAULT_QUALITIES = {
    /* 2 notes */
    '5': [0, 7],            // C5
    'omit3': [0, 7],        // Comit3
    'no5': [0, 4],          // Cno5
    'omit5': [0, 4],        // Comit5
    'm(no5)': [0, 3],       // Cm(no5)
    'm(omit5)': [0, 3],     // Cm(omit5)

    /* 3 notes */
    '': [0, 4, 7],          // C
    'M': [0, 4, 7],         // CM
    'maj': [0, 4, 7],       // Cmaj
    'm': [0, 3, 7],         // Cm
    'min': [0, 3, 7],       // Cmin
    '-': [0, 3, 7],         // C-
    'dim': [0, 3, 6],       // Cdim
    '(b5)': [0, 4, 6],      // C(b5) = not Cb 5
    '-5': [0, 4, 6],        // C-5
    'aug': [0, 4, 8],       // Caug
    'sus2': [0, 2, 7],      // Csus2 - suspended ??
    'sus4': [0, 5, 7],      // Csus4
    'sus': [0, 5, 7],       // Csus
    'm-5': [0, 3, 6],       // Cm-5

    /* 4 notes */
    '6': [0, 4, 7, 9],          // C6
    '7': [0, 4, 7, 10],         // C7
    '7-5': [0, 4, 6, 10],       // C7-5
    '7b5': [0, 4, 6, 10],       // C7b5
    '7+5': [0, 4, 8, 10],       // C7+5
    '7#5': [0, 4, 8, 10],       // C7#5
    '7sus4': [0, 5, 7, 10],     // C7sus4
    'm6': [0, 3, 7, 9],         // Cm6
    'm7': [0, 3, 7, 10],        // Cm7
    'm7-5': [0, 3, 6, 10],      // Cm7-5
    'm7b5': [0, 3, 6, 10],      // Cm7b5
    'm7+5': [0, 3, 8, 10],      // Cm7+5
    'm7#5': [0, 3, 8, 10],      // Cm7#5
    'dim6': [0, 3, 6, 8],       // Cdim6
    'dim7': [0, 3, 6, 9],       // Cdim7
    'M7': [0, 4, 7, 11],        // CM7
    'maj7': [0, 4, 7, 11],      // Cmaj7
    'M7+5': [0, 4, 8, 11],      // CM7+5
    'mM7': [0, 3, 7, 11],       // CmM7
    'add4': [0, 4, 5, 7],       // Cadd4 !?
    'Madd4': [0, 4, 5, 7],      // CMadd4 !?
    'madd4': [0, 3, 5, 7],      // Cmadd4 !?
    'add9': [0, 4, 7, 14],      // Cadd9
    'Madd9': [0, 4, 7, 14],     // CMadd9
    'madd9': [0, 3, 7, 14],     // Cmadd9
    'sus4add9': [0, 5, 7, 14],  // Csus4add9
    'sus4add2': [0, 2, 5, 7],   // Csus4add2 !?
    '2': [0, 4, 7, 14],         // C2
    'add11': [0, 4, 7, 17],     // Cadd11
    '4': [0, 4, 7, 17],         // C4

    /* 5 notes */
    'm69': [0, 3, 7, 9, 14],    // Cm69
    '69': [0, 4, 7, 9, 14],     // C69
    '9': [0, 4, 7, 10, 14],     // C9
    'm9': [0, 3, 7, 10, 14],    // Cm9
    'M9': [0, 4, 7, 11, 14],    // CM9
    'maj9': [0, 4, 7, 11, 14],  // Cmaj9
    '9sus4': [0, 5, 7, 10, 14], // C9sus4
    '7-9': [0, 4, 7, 10, 13],   // C7-9
    '7b9': [0, 4, 7, 10, 13],   // C7b9
    '7+9': [0, 4, 7, 10, 15],   // C7+9
    '7#9': [0, 4, 7, 10, 15],   // C7#9
    '9-5': [0, 4, 6, 10, 14],   // C9-5
    '9b5': [0, 4, 6, 10, 14],   // C9b5
    '9+5': [0, 4, 8, 10, 14],   // C9+5
    '9#5': [0, 4, 8, 10, 14],   // C9#5
    '7#9b5': [0, 4, 6, 10, 15],     // C7#9b5
    '7#9-5': [0, 4, 6, 10, 15],     // C7#9-5
    '7#9#5': [0, 4, 8, 10, 15],     // C7#9#5
    '7#9+5': [0, 4, 8, 10, 15],     // C7#9#5
    'm7b9b5': [0, 3, 6, 10, 13],    // Cm7b9b5
    '7b9b5': [0, 4, 6, 10, 13],     // C7b9b5
    '7b9#5': [0, 4, 8, 10, 13],     // C7b9#5
    '11': [0, 7, 10, 14, 17],       // C11
    '7+11': [0, 4, 7, 10, 18],      // C7+11
    '7#11': [0, 4, 7, 10, 18],      // C7#11
    'M7+11': [0, 4, 7, 11, 18],     // CM7+11
    'M7#11': [0, 4, 7, 11, 18],     // CM7#11
    '7-13': [0, 4, 7, 10, 20],      // C7-13
    '7b13': [0, 4, 7, 10, 20],      // C7b13
    'm7add11': [0, 4, 7, 10, 17],   // Cm7add11
    'M7add11': [0, 4, 7, 11, 17],   // CM7add11
    'mM7add11': [0, 3, 7, 11, 17],  // CmM7add11

    /* 6 notes or more */
    '7b9#9': [0, 4, 7, 10, 13, 15],     // C7b9#9
    '7b9#11': [0, 4, 7, 10, 13, 18],    // C7b9#11
    '7#9#11': [0, 4, 7, 10, 15, 18],    // C7#9#11
    '7b9b13': [0, 4, 7, 10, 13, 17, 20],    // C7b9b13
    '9+11': [0, 4, 7, 10, 14, 18],      // C9+11
    '9#11': [0, 4, 7, 10, 14, 18],      // C9#11
    '13': [0, 4, 7, 10, 14, 21],        // C13
    '13-9': [0, 4, 7, 10, 13, 21],      // C13-9
    '13b9': [0, 4, 7, 10, 13, 21],      // C13b9
    '13+9': [0, 4, 7, 10, 15, 21],      // C13+9
    '13#9': [0, 4, 7, 10, 15, 21],      // C13#9
    '13+11': [0, 4, 7, 10, 18, 21],     // C13+11
    '13#11': [0, 4, 7, 10, 18, 21],     // C13#11
    'M7add13': [0, 4, 7, 9, 11, 14]     // CM7add13
};

class Parser {
    
    constructor(chord_str){
        /* 
            chord_str is expected full chord string like "C", "Cm7", "CmM7" or "mM7add11"
        */
        this.chord_str = chord_str;
        this.root = "";
        this.quality = "";
        this.appended = [];
        this.onnote = null;
    }

    _getRoot(s){
        var root = "";
        var rem = "";
        if( (s.length > 1) && ( s[1] === "b" || s[1] === "#") ){
            // like C# or Bb
            root = s.substr(0, 2);
            rem = s.substr(2);
        }else{
            root = s.substr(0, 1);
            rem = s.substr(1);
        }
        if(!(root in NOTE_VAL_DICT)){
            throw `${root} is unknow note`;
        }
        return { root: root, rem: rem};
    }
    _getOnNote(s){
        var sepstr = s.split('/');
        var onnote = null;
        var rem = "";
        if(sepstr.length === 1){
            rem = s;
        }
        else if(sepstr.length === 2){
            rem = sepstr[0];
            onnote = sepstr[1];
        }
        else{
            throw `${s}: on chord should be set once`;
        }
        return { rem: rem, onnote: onnote };
    }
    parse(){
        var chord, root, quality, appended, onnote;
        var rt_dic = this._getRoot(this.chord_str);
        this.root = rt_dic.root;
        var on_dic = this._getOnNote(rt_dic.rem);
        this.onnote = on_dic.onnote;
        this.quality = on_dic.rem;
        return {
            chord: this.chord_str,
            root: this.root,
            quality: this.quality, 
            appended: appended,
            onnote: this.onnote
        }
    }
};

class Chord {
    /*
    usage:
        var chord = new Chord("Am");
    
        chord.info() #=> Am, root=A, quality=m, appended=[], on=null
        chord.transponse(3) #=> Cm
        chord.components() #=> ['C', 'D#', 'G']
        chord.components_with_pitch(root_pitch=3) #=> ['C3', 'D#3', 'G3']
        
        var chord2 = new Chord("Cm")
        chord.compare(chord2) ? console.log("True") : console.log("False"); #=> True

        var c1 = new Chord("C#");
        var c2 = new Chord("Db");
        c1.compare(c2) ? console.log("True") : console.log("False");  #=> True

        var c = find_chord_from_notes(["C", "E", "G"])
        c.info() #=> C, root=C, quality="", appended=[], onnote=null

        var cp = new ChordProgression(["C", "G/B", "Am"])
        cp.show()  #=> C | G/B | Am
        cp.append("Em/G")
        cp.show()  #=> C | G/B | Am | Em/G
        cp.transpose(2)
        cp.show()  #=> D | A/C# | Bm | F#m/A
        cp.getChord()[1] #=> A/C#

        var cmj = Chord.from_note_index(note=1, quality="", scale="CM");
        var tmp = new Chord("C");
        cmj.compare(tmp) ? console.log("True") : console.log("False");

    */
    constructor(chord_str){
        var parser = new Parser(chord_str);
        var parse_result = parser.parse();
        this.chord = parse_result.chord;
        this.root = parse_result.root;
        this.quality = parse_result.quality;
        this.appended = parse_result.appended;
        this.onnote = parse_result.onnote;
    }
    /* class method */
    static from_scale_index(index, quality, scale, diatonic=false){
        /*
            Chord.from_scale_index(1, "", "Cmaj") #=> new Chord("C")
            Chord.from_scale_index(3, "m7", "Fmaj") #=> new Chord("Am7")
            Chord.from_scale_index(5, "7", "Amin") #=> new Chord("E7")
        */
        var note = index;
        var mode = scale.slice(-3);
        var finalis = scale.slice(0, -3);
        var relative_key = RELATIVE_KEY_DICT[mode][note-1];
        var root_num = NOTE_VAL_DICT[finalis];
        var root = VAL_NOT_DICT[(root_num + relative_key) % 12][0];

        if(diatonic){
            var scale_degrees = RELATIVE_KEY_DICT[mode];

        }
        var chord_name = root + quality;
        return new Chord(chord_name);
    }

    /* instance method */
    info(){
        console.log("=".repeat(20));
        console.log(`origin     := ${this.chord}`);
        if(this.onnote){
            console.log(`transposed := ${this.root}${this.quality}/${this.onnote}`)
        }else{
            console.log(`transposed := ${this.root}${this.quality}`);
        }
        console.log(`root       := ${this.root}`);
        console.log(`quality    := ${this.quality}`);
        console.log(`appended   := ${this.appended}`);
        console.log(`on note    := ${this.onnote}`);
        if( this.quality in DEFAULT_QUALITIES){
            console.log(`compontents: ${DEFAULT_QUALITIES[this.quality]}`);
        }
    }
    components(pitch=null){
        var root_val = this._note_to_val(this.root);
        var cmp = DEFAULT_QUALITIES[this.quality];
        // console.log("-------------------");
        // console.log(this.root);
        // console.log(`root val = ${root_val}`)
        // console.log(cmp);
        var ret = [];
        if(this.onnote){
            ret.push(this.onnote);
        }
        cmp.forEach( (e) => {
            ret.push(this._val_to_note(e + root_val, this.root));
        });
        if(pitch){
            var tmp = -1;
            ret.forEach( (e, i, a) => {
                // console.log(`tmp = ${tmp}, ${e}`);
                if(tmp >= NOTE_VAL_DICT[e]){
                    pitch += 1;
                }
                tmp = NOTE_VAL_DICT[e];
                a[i] = e + pitch; 
            });
        }
        return ret;
    }
    compare_root(chord_obj){

    }
    compare(chord_obj){

    }
    _note_to_val(note){
        return NOTE_VAL_DICT[note];
    }
    _val_to_note(val, scale="C"){
        val %= 12;
        return SCALE_VAL_DICT[scale][val];
    }
    _transpose_note(note, intval){
        var val = this._note_to_val(note);
        val += intval;
        return this._val_to_note(val)
    }
    transpose(intval){
        this.root = this._transpose_note(this.root, intval);
        if(this.onnote){
            this.onnote = this._transpose_note(this.onnote, intval);
        }
    }
};

class ChordProgression {
    constructor(cdlist = []){
        this.chord_list = cdlist;
    }
    append(cd){
        this.chord_list.push(cd);
    }
    transpose(val){
        this.chord_list.forEach( (e) => {
            e.transpose(val);
        });
    }
    info(){
        this.chord_list.forEach( (e) => {
            e.info();
        });
    }
};

if((typeof require !== 'undefined') && (require.main == module)){
    var info_test = [];

    // prepare 
    var c_chord = new Chord("C");
    info_test.push(c_chord);
    var cs_chord = new Chord("C#");
    info_test.push(cs_chord);
    var csm7f5 = new Chord("C#m7-5");
    info_test.push(csm7f5);
    var bbdim = new Chord("Bbdim");
    info_test.push(bbdim);
    var c_chord2 = new Chord("C");
    c_chord2.transpose(1);
    info_test.push(c_chord2);
    var eb7sus4 = new Chord("Eb7sus4");
    eb7sus4.transpose(1);
    info_test.push(eb7sus4);
    // var k = new Chord("K");
    // info_test.push(k);
    var cone = new Chord("C/E");
    info_test.push(cone);
    var donfis = new Chord("D/F#");
    donfis.transpose(2);
    info_test.push(donfis);

    // test execute 
    info_test.forEach( (e) => {
        console.log("_-^-".repeat(3) + "[ INFOTEST ]" + "-^-_".repeat(3));
        e.info();
        console.log("_-^-".repeat(3) + "[ COMPTEST ]" + "-^-_".repeat(3));
        var note_list = e.components(3);
        console.log(note_list);
    });

    var cp = new ChordProgression([new Chord("C"), new Chord("F"), new Chord("G")]);
    cp.info();
    cp.transpose(1);
    cp.info();

    ["CMaj", "DMaj", "GMaj"].forEach( (tone) => {
        console.log("x".repeat(10) + ` ${tone} ` + "x".repeat(10));
        [...Array(7)].map( (_, i) => {
            var scale_chord = Chord.from_scale_index(i+1, 
                (i==0||i==3||i==4) ? "" :
                (i==1||i==2||i==5) ? "m" : "m-5", tone);
            scale_chord.info();    
        });
    });
    ["ANMn", "CNMn", "DNMn"].forEach( (tone) => {
        console.log("x".repeat(10) + ` ${tone} ` + "x".repeat(10));
        [...Array(7)].map( (_, i) => {
            var scale_chord = Chord.from_scale_index(i+1, 
                (i==0||i==3) ? "m" :
                (i==4) ? "7" :
                (i==2||i==5||i==6) ? "" : "m-5", tone);
            scale_chord.info();    
        });
    });
}
