FasdUAS 1.101.10   ��   ��    l      ����  i         I     �� ��
�� .aevtodocnull  �    alis  o      ���� 0 draggedfiles draggedFiles��    X     : �� 	  k    5 
 
     l   ��  ��    ' ! Get the path of the dragged file     �   B   G e t   t h e   p a t h   o f   t h e   d r a g g e d   f i l e      r        n        1    ��
�� 
psxp  o    ���� 0 afile aFile  o      ���� $0 originalfilepath originalFilePath      l   ��������  ��  ��        l   ��  ��    A ; Create a copy of the original file with the same extension     �   v   C r e a t e   a   c o p y   o f   t h e   o r i g i n a l   f i l e   w i t h   t h e   s a m e   e x t e n s i o n      l       !  r     " # " b     $ % $ o    ���� $0 originalfilepath originalFilePath % m     & & � ' ' 
 _ c o p y # o      ����  0 copiedfilepath copiedFilePath   0 * This will create a copy with _copy suffix    ! � ( ( T   T h i s   w i l l   c r e a t e   a   c o p y   w i t h   _ c o p y   s u f f i x   ) * ) I   +�� +��
�� .sysoexecTEXT���     TEXT + b    ' , - , b    # . / . b    ! 0 1 0 m     2 2 � 3 3  c p   1 n      4 5 4 1     ��
�� 
strq 5 o    ���� $0 originalfilepath originalFilePath / m   ! " 6 6 � 7 7    - n   # & 8 9 8 1   $ &��
�� 
strq 9 o   # $����  0 copiedfilepath copiedFilePath��   *  : ; : l  , ,��������  ��  ��   ;  < = < l  , ,�� > ?��   > ? 9 Run the gzip command on the original file (not the copy)    ? � @ @ r   R u n   t h e   g z i p   c o m m a n d   o n   t h e   o r i g i n a l   f i l e   ( n o t   t h e   c o p y ) =  A�� A I  , 5�� B��
�� .sysoexecTEXT���     TEXT B b   , 1 C D C m   , - E E � F F  g z i p   - 9   - f   D n   - 0 G H G 1   . 0��
�� 
strq H o   - .���� $0 originalfilepath originalFilePath��  ��  �� 0 afile aFile 	 o    ���� 0 draggedfiles draggedFiles��  ��       �� I J��   I ��
�� .aevtodocnull  �    alis J �� ���� K L��
�� .aevtodocnull  �    alis�� 0 draggedfiles draggedFiles��   K ���������� 0 draggedfiles draggedFiles�� 0 afile aFile�� $0 originalfilepath originalFilePath��  0 copiedfilepath copiedFilePath L 
�������� & 2�� 6�� E
�� 
kocl
�� 
cobj
�� .corecnte****       ****
�� 
psxp
�� 
strq
�� .sysoexecTEXT���     TEXT�� ; 9�[��l kh ��,E�O��%E�O��,%�%��,%j O��,%j [OY��ascr  ��ޭ