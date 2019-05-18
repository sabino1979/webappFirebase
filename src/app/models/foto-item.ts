export class FotoItem {
   public archivo: File;
   public monbreArchivo: string;
   public urlFirestorage: string;
   public subido: boolean;
   public progresso: number;

   constructor( archivo: File){
      this.archivo = archivo;
      this.monbreArchivo = archivo.name;
      this.subido = false;
      this.progresso = 0;
   }
}
