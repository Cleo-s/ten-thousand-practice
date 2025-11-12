function getLength(text: string): number {
    const textLength: number = text.length;
    return textLength; 
}

console.log(getLength('Vladik'));

type Size = 'small' | 'medium' | 'large';

function getLabelSize(size: Size): string {
    switch(size) {
        case 'small': return 'Selected: small';
        case 'medium': return 'Selected: medium';
        case 'large': return 'Selected: large';
        default: return 'Size not choosen';
    }
}

console.log(getLabelSize('small'));