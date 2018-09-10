import { Observable } from 'rxjs';

export const getFileInfo$ = ({file_name}:{file_name:string}) => {
  return new Observable((observer) => {
    console.log('file_name', file_name);
    setTimeout(() => {
      observer.next({
        content:'异步获取的内容'
      });
    }, 2000);
  });
};
