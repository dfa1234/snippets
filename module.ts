export default class Module {
    public static date():void{
        console.warn(`Reload Bundle [${new Date()}]`);
        console.warn('jQuery version: ',$.prototype.jquery)
    }
}
