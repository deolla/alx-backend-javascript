interface MajorCredits {
    credits: number;
    _brand: string;
};

interface MinorCredits {
    credits: number;
    _brand: string;
};

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: subject1._brand + subject2._brand
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: subject1._brand + subject2._brand
    };
}

export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };
