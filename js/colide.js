function blockRect(r1, r2){
	//r1 -> bloqueado
	
	//r2 -> Parede, elemento que bloqueia
	
	//catetos que armazena a distancia entre os retangulos
	var catX = r1.centerX() - r2.centerX();
	var catY = r1.centerY() - r2.centerY();
	
	//soma das metades.
	var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
	var sumHalfHeight = r1.halfHeight() + r2.halfHeight();
	
	if(Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight){
		var overlapX = sumHalfWidth - Math.abs(catX);
		var overlapY =  sumHalfHeight - Math.abs(catY);
		
		//verificando aonde ocorre a colisao
		if(overlapX >= overlapY){//colisao é por cima ou por baixo.
			if(catY > 0){//colisao por cima.
			r1.posY += overlapY;
			
			}else{
				r1.posY -= overlapY;
			}//fecha else
			
		}else{//colisao é pela esquerda ou direita
		   if(catX > 0){//colisao pela esquerda
		   r1.posX += overlapX;
			   
		   }else{
			   r1.posX -= overlapX;
		   }//fecha else
			
		}//fecha else
		
	}//fecha if
	
}//fecha a funçao blockRect
