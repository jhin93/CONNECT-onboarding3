export default interface ItemMetadata {
    attributes: Attributes[];
    id: string;
    image: string;
    name:string;
    uri:string;
}

interface Attributes {
    trait_type: string;
    value: string;
}