var text = {
    "start": "You are $adj.art() $race $class with $colorb hair and $eyeadj $colora eyes. You are of $size.art() build and enjoy $enjoy in your free time.  Your family $wealth and you credit your $char personality to your $upadj upbringing.  Your favorite color is $favcolor and you can't stand $hate.",
    "$adj": "absorbing|encouraging|lacking|faded|high|instinctive|agreeable|earthy",
    "$class": "barbarian|bard|cleric|druid|fighter|monk|paladin|ranger|rogue|sorcerer|warlock|wizard",
    "$race": "dwarf|elf|halfling|human|gnome|half-orc|dragonborn|tiefling",
    "$colora": "yellow|white|black|red|blue|brown|hazel|green|translucent",
    "$colorb": "white|black|red|gray|purple|seafoam|blonde|brown|green",
    "$eyeadj": "bashful|spry|weepy|smoky|longing|determined|hateful|clueless",
    "$size": "tiny|small|medium|large|enourmous",
    "$enjoy": "herping|sailing|debating|creating art|power walking|cheesemaking|storytelling|throwing darts|baton twirling",
    "$wealth": "is dirt poor|is of modest means|makes ends meet| are successful business owner's|is loaded|is incredibly wealthy",
    "$char": "bubbly|flamboyant|curt|pramatic|insular|remarkable|demonic|wrathful|humble|flirtatious|psychotic",
    "$upadj": "sad|playful|amazing|dark|ominous|loving",
    "$favcolor": "khaki|rosy brown|    honeydew| red|    ivory|    light goldenrod yellow",
    "$hate": "clothing|music|light|frogs|jungle juice"
}

function textit() {
    let rg = RiTa.grammar(text);
    let intro = rg.expand();
    console.log(intro);
    document.getElementById('app').innerHTML = intro;
    console.log(intro.establishment);
}

document.addEventListener("DOMContentLoaded", textit);